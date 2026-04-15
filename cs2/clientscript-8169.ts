//
function script8169(int0: int, int1: int, int2: boolean): void {
    var int0 = MAX(0, int0);
    var int1 = MIN(29, int1);
    while ((int0 <= int1)) {
        IF_SETHIDE(int2, script8170(int0));
        int0 = (int0 + 1);
    };
    return;
}