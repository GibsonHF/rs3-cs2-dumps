//
function script18075(int0: int, int1: component): void {
    var int2 = ((int0 + IF_GETHEIGHT(comp(1226, 32))) + 20);
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(IF_GETWIDTH(int1), int2, int1);
    if ((int2 > IF_GETHEIGHT(int1))) {
        script7791(comp(1226, 28), int1);
    } else {
        CC_DELETEALL(comp(1226, 28));
    };
    return;
}