//
function script18075(int0: number, int1: number): void {
    var int2 = ((int0 + IF_GETHEIGHT(80347168)) + 20);
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(IF_GETWIDTH(int1), int2, int1);
    if ((int2 > IF_GETHEIGHT(int1))) {
        script7791(80347164, int1);
    } else {
        CC_DELETEALL(80347164);
    };
    return;
}