//
function script5054(int0: int, int1: int): void {
    var int0 = (int0 - IF_GETSCROLLX(comp(1111, 12)));
    var int1 = (int1 - IF_GETSCROLLY(comp(1111, 12)));
    if ((int0 < 10)) {
        script5050(-10, 1, 0);
    } else if ((int0 > (IF_GETWIDTH(comp(1111, 12)) - (varclient_1396 + 10)))) {
        script5050(10, 1, 0);
    };
    if ((int1 < 10)) {
        script5050(-10, 1, 1);
    } else if ((int1 > (IF_GETHEIGHT(comp(1111, 12)) - (varclient_1396 + 10)))) {
        script5050(10, 1, 1);
    };
    return;
}