//
function script7982(int0: int, int1: component): void {
    if ((int0 <= 0)) {
        var int0 = 1;
    };
    if ((IF_GETHEIGHT(int1) >= int0)) {
        IF_SETSIZE(IF_GETWIDTH(int1), int0, 0, 0, int1);
        IF_SETONTIMER(callback(), int1);
    } else {
        IF_SETSIZE(IF_GETWIDTH(int1), (IF_GETHEIGHT(int1) + 1), 0, 0, int1);
    };
    return;
}