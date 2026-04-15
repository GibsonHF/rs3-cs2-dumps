//
function script15341(int0: component, int1: int, int2: int): void {
    if ((int1 < IF_GETHEIGHT(int0))) {
        var int1 = IF_GETHEIGHT(int0);
    };
    IF_SETSCROLLSIZE(0, int1, int0);
    IF_SETSCROLLPOS(0, int2, int0);
    script7791(comp(1851, 39), int0);
    return;
}