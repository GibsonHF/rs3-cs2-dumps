//
function script13349(int0: int): void {
    var int1 = IF_GETSCROLLY(comp(517, 168));
    if ((int1 > int0)) {
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), comp(517, 168));
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), comp(517, 171));
    } else if ((int1 < int0)) {
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), comp(517, 168));
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), comp(517, 171));
    } else {
        IF_SETONTIMER(callback(), comp(517, 158));
        script10503();
    };
    return;
}