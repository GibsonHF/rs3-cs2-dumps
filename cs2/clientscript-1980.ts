//
function script1980(int0: int, int1: component): void {
    if ((IF_GETHEIGHT(int1) == int0)) {
        IF_SETONTIMER(callback(), IF_GETLAYER(int1));
        return;
    };
    if ((IF_GETHEIGHT(int1) < int0)) {
        IF_SETSIZE(IF_GETWIDTH(int1), (IF_GETHEIGHT(int1) + 1), 0, 0, int1);
    } else {
        IF_SETSIZE(IF_GETWIDTH(int1), (IF_GETHEIGHT(int1) - 1), 0, 0, int1);
    };
    return;
}