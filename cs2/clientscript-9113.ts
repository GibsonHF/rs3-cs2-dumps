//
function script9113(int0: int): void {
    if ((CC_FIND(comp(248, 44), int0) == 1)) {
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, comp(248, 45));
        IF_SETPOSITION((IF_GETX(comp(248, 44)) + CC_GETX()), (IF_GETY(comp(248, 44)) + CC_GETY()), 0, 0, comp(248, 45));
        IF_SETHIDE(false, comp(248, 45));
    } else {
        IF_SETHIDE(true, comp(248, 45));
    };
    return;
}