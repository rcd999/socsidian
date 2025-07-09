<%*
const symbol = await tp.system.suggester(["⚙️task", "📖playbook", "👑playbook"], ["⚙️", "📖", "👑"]);
const ptype = symbol === "⚙️" ? "task" : "playbook";
const alias = await tp.system.prompt("Enter a short alias to easily refer back to this entry.", null, true);
tR += `---
name: 
aliases:
  - ${symbol + alias}
actions: []
dependencies: []
dependents: []
tags:
  - ${ptype}
---

# Description


# Objectives


# Setup

`;
%>