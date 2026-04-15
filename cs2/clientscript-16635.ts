//
function script16635(int0: int, int1: unknown_int): int {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = ACTIVECHATPHRASE_PREPARE();
    int2 = SCALE(100, DETAILGET_INTERFACESCALE(), int2);
    int3 = SCALE(100, DETAILGET_INTERFACESCALE(), int3);
    if ((int2 >= 1480)) {
        if ((int1 == 1)) {
            IF_TRIGGEROP(comp(1433, 63), -1, 1);
        };
        return 16;
    };
    if (((int3 >= 700) && (int2 >= 952))) {
        if ((int1 == 1)) {
            IF_TRIGGEROP(comp(1433, 63), -1, 2);
        };
        return 17;
    };
    if ((int1 == 1)) {
        IF_TRIGGEROP(comp(1433, 63), -1, 3);
    };
    return int0;
}