<%*
let tmp = tp.app.vault.getAbstractFileByPath(tp.file.folder(true) + "/" + tp.file.title + ".md");
let content = "";
let ts = tag.split("/");
const file = tp.file.folder(true) + "/" + ts[0];
if (!await tp.file.exists(file + ".md")) {
	tR +=
`---
aliases:
  - ${'"#' + ts[0] + '"'}
tags:
  - Meta
---
${"# #" + ts[0]}

## Purpose

## Related tags

## Sub-tags
`;
	tR += ts.length > 1 ? "\n- #" + ts.join("/") : "\n";
	await tp.file.move(file);
}
else {
	if (ts.length > 1) {
		try {
			content += await tp.app.vault.read(tp.app.vault.getAbstractFileByPath(file + ".md"));
			content = content.split("\n");
			let pending = "- #" + ts.join("/");
			if (content.findIndex((t) => t === pending) === -1) {
				content.push(pending);
				await tp.app.vault.modify(tp.app.vault.getAbstractFileByPath(file + ".md"), content.join("\n"));
			}
		} catch {}
	}
	await tp.app.vault.delete(tmp, true);
}
%>