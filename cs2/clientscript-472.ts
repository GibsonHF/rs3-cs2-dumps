//
function script472(int0: number, int1: number): number {
    if ((script4356() == 0)) {
        return 0;
    };
    if ((((int0 <= 0) || (int0 > ENUM_GETOUTPUTCOUNT(681))) && (int0 != 31))) {
        script12478(`Invalid stat perk attempting to be activated! $stat = ${inttostring(int0, 10)}`);
        return 0;
    };
    var int2 = INV_GETOBJ(94, 1);
    var int3 = item_getparam(int2, 4244);
    if ((((int0 <= 0) || (int0 > ENUM_GETOUTPUTCOUNT(681))) && (int0 != 31))) {
        script12478(`Invalid stat perk attempting to be activated! $stat = ${inttostring(int0, 10)}`);
        return 0;
    };
    if ((script4034(int2) == 1)) {
        int2 = 20767;
    };
    if ((item_getparam(int2, 258) == 0)) {
        return 0;
    };
    if (((item_getparam(int2, 6295) == 1) || (item_getparam(int2, 7393) == 1))) {
        return script13041(int2, int0, int1);
    };
    if (((int1 == 1) && (int3 == 0))) {
        return 0;
    };
    if (((int0 == 31) && (item_getparam(int2, 6296) == 1))) {
        return 1;
    };
    if ((script6687(int2, int0, int1) == 1)) {
        return 1;
    };
    int2 = script6643();
    if (((int2 != -1) && (script6687(int2, int0, int1) == 1))) {
        return 1;
    };
    return 0;
}