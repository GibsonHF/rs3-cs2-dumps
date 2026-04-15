//
function script12538(): [int, int] {
    var int0 = script284(COORD());
    var int1 = (COORDX(COORD()) - COORDX(int0));
    var int2 = (COORDZ(COORD()) - COORDZ(int0));
    if (((int1 == 14) && (int2 == 36))) {
        return [-1, -1];
    };
    int1 = (int1 - 11);
    int2 = (int2 - 13);
    if ((int1 > 41)) {
        int1 = -1;
    };
    if ((int2 > 41)) {
        int2 = -1;
    };
    return [int1, int2];
}