//
function script20654(int0: number, int1: number): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    var int2 = IF_GETFONTMETRICS(int1);
    var int3 = (10 + STRINGWIDTH(IF_GETTEXT(int1), int2));
    if ((int2 == -1)) {
        return;
    };
    if ((int3 > IF_GETWIDTH(int0))) {
        IF_SETSIZE(int3, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    return;
}