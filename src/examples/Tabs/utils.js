const getTabId = (id, tabId) => {
    return `${id}-tab-${tabId}`
}

const getTabPanelId = (id, tabId) => {
    return `${id}-panel-${tabId}`;
}

export {
    getTabId,
    getTabPanelId
}