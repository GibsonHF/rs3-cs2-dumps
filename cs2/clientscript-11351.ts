//
function script11351(int0: number, int1: number): void {
    var int2 = 0;
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    if ((IF_GETHIDE(int0) == 0)) {
        int2 = 1;
    } else {
        int2 = 0;
    };
    if ((int2 == 1)) {
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(0, int0);
        IF_SETHIDE(1, int1);
    };
    return;
}