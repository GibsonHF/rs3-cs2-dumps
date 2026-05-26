//
function script5958(): void {
    if ((IF_GETGRAPHIC(comp(1260, 89)) == 5917 as graphic)) {
        IF_SETGRAPHIC(5919 as graphic, comp(1260, 89));
    } else if ((IF_GETGRAPHIC(comp(1260, 89)) == 5919 as graphic)) {
        IF_SETGRAPHIC(5917 as graphic, comp(1260, 89));
        IF_SETGRAPHIC(5919 as graphic, comp(1260, 87));
    };
    return;
}