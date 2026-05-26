//
function script6292(int0: number): void {
    var int1 = 0;
    IF_SETSCROLLPOS(0, 0, 84934665);
    int1 = (int0 * 12);
    IF_SETSCROLLSIZE(0, int1, 84934665);
    if ((int1 > IF_GETHEIGHT(84934665))) {
        IF_SETHIDE(0, 84934666);
        script31(84934666, 84934665, 8383, 8380, 8381, 8382, 8375, 8374);
    } else {
        IF_SETHIDE(1, 84934666);
    };
    return;
}