const getAccordionHeaderId = (accordionId, id) => {
    return `${accordionId}-header-${id}`;
}

const getAccordionPanelId = (accordionId, id) => {
    return `${accordionId}-panel-${id}`;
}

export {
    getAccordionHeaderId,
    getAccordionPanelId
}