```js quickadd
const dv = app.plugins.plugins.dataview.api;
const PLAYBOOKFOLDER = "Story/Playbooks";
let dataArrPlaybooks = dv.pages(`"${PLAYBOOKFOLDER}" and #Playbook/Investigation`).where(p => !p.actions);	
const selected = await this.quickAddApi.checkboxPrompt(
	dataArrPlaybooks
	.flatMap(p => p.aliases)
	.array()
);
selected.map(
	s => dataArrPlaybooks
	.where(
		p => dv.func.contains(p.aliases, s)
	)
);
```