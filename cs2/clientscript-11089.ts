//
function script11089(int0: number): void {
    var int1 = 0;
    int1 = SCALE(IF_GETHEIGHT(104398857), 40, int0);
    IF_SETSIZE(IF_GETWIDTH(104398857), int1, 0, 0, 104398858);
    int1 = SCALE(IF_GETHEIGHT(104398859), 40, MAX((40 - int0), 0));
    IF_SETSIZE(IF_GETWIDTH(104398859), int1, 0, 0, 104398860);
    return;
}