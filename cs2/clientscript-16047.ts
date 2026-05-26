//
function script16047(int0: number, int1: number, int2: number): void {
    script13998(13369362, 13369364, 41013, 0, (int1 * (40 + 1)), IF_GETWIDTH(13369361), 40, int1, 0, "", script9670(int1, int2));
    script13998(13369362, 13369364, 41018, 0, (int1 * (40 + 1)), IF_GETWIDTH(13369361), 40, int1, 0, "", script9670(int1, int2));
    script13998(13369362, 13369364, 41023, 0, (int1 * (40 + 1)), IF_GETWIDTH(13369361), 40, int1, 0, "", script9670(int1, int2));
    if ((CC_FIND(13369364, int1) == 1)) {
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script978, int0, int1));
    };
    return;
}