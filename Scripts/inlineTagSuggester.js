function inlineTagSuggester(...args) {
    let allTags = dv.pages('"Tags"') // all pages in the vault
        .flatMap(p => p.file.tags) // gather all tags from each page
        .filter(t => t) // remove any empty entries
        .map(t => t.startsWith("#") ? t : "#" + t) // ensure each tag starts with '#'
        .distinct()
        .array();
    // 2. Format tags as Meta-bind options
    let optionsText = allTags.map(tag => `option(${tag.substring(1)})`).join(", ");
    // 3. Construct the Meta-bind listSuggester input syntax
    args[0].push('`' + `INPUT[inlineListSuggester(${optionsText}):tags]` + '`');
}
inlineTagSuggester(input); 