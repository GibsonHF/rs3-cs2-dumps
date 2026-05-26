//
function script13832(int0: number, int1: number, int2: number, int3: number): number {
    IF_SETHIDE(int1, int0);
    if ((int1 == 0)) {
        IF_SETPOSITION(int3, int2, 0, 0, int0);
        var int2 = (int2 + IF_GETHEIGHT(int0));
    };
    return int2;
}