//
function script6292(int0: number): void {
    var int1 = 0;
    IF_SETSCROLLPOS(0, 0, comp(1296, 9));
    int1 = (int0 * 12);
    IF_SETSCROLLSIZE(0, int1, comp(1296, 9));
    if ((int1 > IF_GETHEIGHT(comp(1296, 9)))) {
        IF_SETHIDE(false, comp(1296, 10));
        script31(84934666, 84934665, 8383, 8380, 8381, 8382, 8375, 8374);
    } else {
        IF_SETHIDE(true, comp(1296, 10));
    };
    return;
}