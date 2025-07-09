<%*
tR +=
`---
name: 
status: New
created: ${tp.date.now()}
started:
ended:
due:
aliases: []
anchors: []
tags: []
impact:
likelihood:
urgency: 
visibility: 
priority:
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
let aliasSyntax = '`' + 'INPUT[inlineList(placeholder(Add aliases)):aliases]' + '`';

// 4. Render the input field in the note
const table = dv.markdownTable(["🪪", "🎭", "🏷️", "⏳", "💀", "⏲️", "🙈", "∑ 📌"], dv.array([[titleSyntax, aliasSyntax, tagSyntax, '`BUTTON[start]` ' + '**' + statusSyntax + '**' + ' `BUTTON[close]`', '`VIEW[{impact}* ({likelihood} / 100)]`', '`VIEW[{urgency}]`' ,'`VIEW[{visibility}]`', '`VIEW[{priority}]`']]));
dv.paragraph(table);
```
# Description


## Prioritization

```meta-bind-button
label: ∑ Priority
icon: ""
style: primary
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: Calculate the priority
id: priority
hidden: false
actions:
  - type: updateMetadata
    bindTarget: priority
    evaluate: true
    value: 2 * (getMetadata('impact') * (getMetadata('likelihood') / 100)) + getMetadata('visibility') + getMetadata('urgency')
```

### Potential Addressed Risk 💀 and Opportunity Enablement🌸

#### Impact 💥

```meta-bind
INPUT[select(option(1, Lowest), option(2, Low), option(3, Medium), option(4, High), option(5, Critical)):impact]
```

#### Likelihood 🎲

`INPUT[slider(addLabels(true),stepSize(5),defaultValue(50)):likelihood]`

### Urgency ⏲️

```meta-bind
INPUT[select(option(1, Lowest), option(2, Low), option(3, Medium), option(4, High), option(5, Critical)):urgency]
```

### Visibility 🙈

```meta-bind
INPUT[select(option(1, Lowest), option(2, Low), option(3, Medium), option(4, High), option(5, Very High)):visibility]
```

# Objectives 🎯


# Stakeholders 

| Name | Title | Role | Email | Phone | Organization | Notes | Influence | Decision Maker | Interest | Last Contact | Alternate Contact | Location/Timezone | Links | Last Updated |
| ---- | ----- | ---- | ----- | ----- | ------------ | ----- | --------- | -------------- | -------- | ------------ | ----------------- | ----------------- | ----- | ------------ |
|      |       |      |       |       |              |       |           |                |          |              |                   |                   |       |              |

# Tasks ⚙️

## Pending ⏳

<%*
const opener = ["`", "`", "`", "dataview", "\n"].join("");
const closer = ["`", "`", "`"].join("");
tR += opener;
tR += `TASK
FROM "Story"
WHERE name = this.name AND !completed 
SORT due ASC, effort ASC
`
tR += closer;
%>

## Completed ⌛

<%*
tR += opener;
tR += `TASK
FROM "Story"
WHERE name = this.name AND completed 
SORT created ASC, effort ASC
`
tR += closer;
%>

# Documentation 📃


---

# After Action Report

## Post Incident


## Feedback 


---

# Backlog 📜
