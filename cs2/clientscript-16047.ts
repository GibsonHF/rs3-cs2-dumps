//
function script16047(int0: struct, int1: int, int2: int): void {
    script13998(comp(204, 18), comp(204, 20), 41013 as struct, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, false, "", script9670(int1, int2));
    script13998(comp(204, 18), comp(204, 20), 41018 as struct, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, false, "", script9670(int1, int2));
    script13998(comp(204, 18), comp(204, 20), 41023 as struct, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, false, "", script9670(int1, int2));
    if ((CC_FIND(comp(204, 20), int1) == 1)) {
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script978, int0, int1));
    };
    return;
}