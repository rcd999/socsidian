<%*
tR +=
`---
name: 
status: New
started:
ended:
due:
anchors: []
aliases: []
tags:
  - Event
sources: []
startTime: 
endTime: 
---
`;
%>
```dataviewjs
// 1. Get all tags from all notes in the vault

let allTags = dv.pages('"Tags"')  // all pages in the vault
    .flatMap(p => p.file.tags)   // gather all tags from each page
    .filter(t => t)         // remove any empty entries
    .map(t => t.startsWith("#") ? t : "#" + t)  // ensure each tag starts with '#'
	.distinct()
	.array();

// 2. Format tags as Meta-bind options

let optionsText = allTags.map(tag => `option(${tag.substring(1)})`).join(", ");

// 3. Construct the Meta-bind listSuggester input syntax

let tagSyntax = '`' + `INPUT[inlineListSuggester(${optionsText}):tags]` + '`';
let statusSyntax = '`VIEW[{status}]`';
let titleSyntax = '`' + 'INPUT[text(placeholder(Name)):name]' + '`';
let aliasSyntax = '`' + 'INPUT[inlineList:aliases]' + '`';

// 4. Render the input field in the note
const table = dv.markdownTable(["🪪", "🎭", "🏷️", "⏳", "⬅️", "➡️"], dv.array([[titleSyntax, aliasSyntax, tagSyntax, '`BUTTON[start]` ' + '**' + statusSyntax + '**' + ' `BUTTON[close]`', '`VIEW[{startTime}]`' ,'`VIEW[{endTime}]`']]));
dv.paragraph(table);
```
# Summary


# Analysis


# Outcome

