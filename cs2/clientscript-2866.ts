//
function script2866(int0: coordgrid, int1: coordgrid): int {
    var int2 = 0;
    var int3 = 0;
    int2 = (COORDX(int0) - COORDX(int1));
    if ((int2 < 0)) {
        int2 = (int2 * -1);
    };
    int3 = (COORDZ(int0) - COORDZ(int1));
    if ((int3 < 0)) {
        int3 = (int3 * -1);
    };
    if ((int2 > int3)) {
        return int2;
    };
    return int3;
}