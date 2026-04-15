//
function script13266(): void {
    var int0 = IF_GETSCROLLX(comp(517, 168));
    var int1 = (IF_GETSCROLLWIDTH(comp(517, 168)) - IF_GETWIDTH(comp(517, 168)));
    var int2 = MIN(int1, (((int0 / 48) + 1) * 48));
    IF_SETSCROLLPOS(MIN((int0 + 4), int1), 0, comp(517, 168));
    IF_SETSCROLLPOS(MIN((int0 + 4), int1), 0, comp(517, 171));
    IF_SETONTIMER(callback(script13267, int2), comp(517, 158));
    return;
}