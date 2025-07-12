<%*
const cb = (fm, tPath, q, tasks, regex) => {
	if (fm.dependencies.length > 0 && fm.actions.length > 0) {
		throw "Only actions or properties can be populated in a single instance.";
	}
	else if (fm.actions.length > 0) {
		fm.actions.forEach(a => {
			tasks.push({
				"title": fm.title,
				"action": a
			});
		});
	}
	else if (fm.dependencies.length > 0) {
		fm.dependencies.forEach(dep => {
			q.push(tp.app.metadataCache.getFirstLinkpathDest(dep.match(regex)[1], tPath));
		});
	}
	else {
		throw "Neither actions nor dependencies were found.";
	}
}
const TEMPLATE = tp.app.workspace.getActiveFile();
const TEMPLATEPATH = TEMPLATE.parent.path;
const fREGEX = /\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/;
let targets = await tp.system.prompt("Enter a comma separated list of entities of interest.")
.then(t => t.replace(/\s+/g, ""))
.then(t => t.split(","));
let due = await tp.system.prompt("Due date (Offset, 1D, 1M, 1Y optional):");
let priority = await tp.system.suggester(["🔺: Highest","⏫: High","🔼: Medium","🔽: Low","⏬️: Lowest"], ["🔺","⏫","🔼","🔽","⏬️"]);
let new_tasks = [];
let queue = [];
queue.push(TEMPLATE);
while (queue.length > 0) {
	await tp.app.fileManager.processFrontMatter(queue.shift(), frontmatter => cb(frontmatter, TEMPLATEPATH, queue, new_tasks, fREGEX));
}
let meta = [];
targets.forEach(target => {
	new_tasks.forEach(task => {
		meta = [];
		meta.push("- [ ] ");
		meta.push("**" + task["action"] + "**");
		meta.push("[Objective" + ":" + ": " + task["title"] + "]");
		meta.push("[Target" + ":" + ": " + target + "]");
		if (priority) meta.push(priority);
		meta.push("➕ " + tp.date.now("YYYY-MM-DD"));
		if (due) meta.push("📅 " + tp.date.now("YYYY-MM-DD", ("P" + due)));
		meta.push(`\n`);
		//if (tags) meta.push(tags);
		tR += meta.join(" ");
	});
});
%>