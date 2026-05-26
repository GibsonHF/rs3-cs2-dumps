//
function script9964(int0: number): number {
    if ((int0 == -1)) {
        return -1;
    };
    var int1 = struct_getparam(int0, 4397);
    if (((int1 < 0) || (int1 >= INV_SIZE(675)))) {
        return -1;
    };
    return INV_GETOBJ(675, int1);
}