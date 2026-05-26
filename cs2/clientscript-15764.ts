//
function script15764(int0: number): number {
    if ((int0 == -1 as dbrow)) {
        return -1;
    };
    if ((DB_GETFIELDCOUNT(int0, 667920) == 0)) {
        return -1;
    };
    var int1 = dbrow_getfield(int0, 667920, 0);
    if (((int1 < 0) || (int1 >= INV_SIZE(675)))) {
        return -1;
    };
    return INV_GETOBJ(675, int1);
}