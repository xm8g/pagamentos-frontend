export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {} //um objeto vazio
    tabIds.forEach(tabId => tabsToShow[tabId] = true) //cria e seta p/ true um atributo tabId no objeto 'tabsToShow'
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}