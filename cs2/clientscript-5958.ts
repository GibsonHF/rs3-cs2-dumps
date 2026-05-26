//
function script5958(): void {
    if ((IF_GETGRAPHIC(82575449) == 5917)) {
        IF_SETGRAPHIC(5919, 82575449);
    } else if ((IF_GETGRAPHIC(82575449) == 5919)) {
        IF_SETGRAPHIC(5917, 82575449);
        IF_SETGRAPHIC(5919, 82575447);
    };
    return;
}