<%*
let task = await tp.system.prompt("Task description:");
let scheduled = await tp.system.prompt("Schedule the task (Offset, 1D, 1M, 1Y optional):"); 
let due = await tp.system.prompt("Due date (Offset, 1D, 1M, 1Y optional):");
let tags = await tp.system.prompt("Tags (comma-separated):");
let effort = await tp.system.suggester(["Low", "Medium", "High"], [1, 2, 3]);
//let priority = await tp.system.suggester(["🔺: Highest","⏫: High","🔼: Medium","🔽: Low","⏬️: Lowest"], ⏬️"]);
scheduled = scheduled ? tp.date.now("YYYY-MM-DD", ("P" + scheduled)) : tp.date.now("YYYY-MM-DD");
due = due ? tp.date.now("YYYY-MM-DD", ("P" + due), scheduled, "YYYY-MM-DD") : tp.date.now("YYYY-MM-DD", 0, scheduled, "YYYY-MM-DD");
let meta = [];
//if (priority) meta.push(priority);
meta.push('(story' + ':' + ': ' + tp.frontmatter.name + ')');
meta.push('[effort' + ':' + ': ' + effort + ']');
meta.push('[created' + ':' + ': ' + tp.date.now("YYYY-MM-DD") + ']');
meta.push('[scheduled' + ':' + ': ' + scheduled + ']');
meta.push('[due' + ':' + ': ' + due + ']');
//meta.push("➕ " + tp.date.now("YYYY-MM-DD"));
//meta.push("⏳ " + scheduled);
//meta.push("📅 " + due);
if (tags) meta.push(tags);
tR += task + (meta.length ? " " + meta.join(" ") : "");
%>