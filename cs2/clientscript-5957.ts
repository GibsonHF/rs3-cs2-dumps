//
function script5957(): void {
    if ((IF_GETGRAPHIC(82575447) == 5917)) {
        IF_SETGRAPHIC(5919, 82575447);
    } else if ((IF_GETGRAPHIC(82575447) == 5919)) {
        IF_SETGRAPHIC(5917, 82575447);
        IF_SETGRAPHIC(5919, 82575449);
    };
    return;
}