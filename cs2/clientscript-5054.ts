//
function script5054(int0: number, int1: number): void {
    var int0 = (int0 - IF_GETSCROLLX(72810508));
    var int1 = (int1 - IF_GETSCROLLY(72810508));
    if ((int0 < 10)) {
        script5050(-10, 1, 0);
    } else if ((int0 > (IF_GETWIDTH(72810508) - (varclient_1396 + 10)))) {
        script5050(10, 1, 0);
    };
    if ((int1 < 10)) {
        script5050(-10, 1, 1);
    } else if ((int1 > (IF_GETHEIGHT(72810508) - (varclient_1396 + 10)))) {
        script5050(10, 1, 1);
    };
    return;
}