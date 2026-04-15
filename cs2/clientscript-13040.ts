//
function script13040(int0: int, int1: unknown_int): unknown_int {
    if ((script4356() == 0)) {
        return 0;
    };
    var int2 = INV_GETOBJ(94 as inv, 1);
    if ((((int0 <= 0) || (int0 > ENUM_GETOUTPUTCOUNT(681 as cs2enum))) && (int0 != 31))) {
        script12478(`Invalid stat perk attempting to be activated! $stat = ${inttostring(int0, 10)}`);
        return 0;
    };
    if (((int2 != -1 as obj) && (script6687(int2, int0, int1) == 1))) {
        return script13042(int0, int1);
    };
    int2 = script6643();
    if (((int2 != -1 as obj) && (script6687(int2, int0, int1) == 1))) {
        return script13042(int0, int1);
    };
    return 0;
}