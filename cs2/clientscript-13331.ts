//
function script13331(int0: component): void {
    var int1 = enum_getreverseindex(9, 0, 13034 as cs2enum, int0, 0);
    if (((int1 < 0) || (int1 > (ENUM_GETOUTPUTCOUNT(11065 as cs2enum) - 1)))) {
        return;
    };
    varclient_5990 = -1;
    script13332(int1);
    IF_SETONOP(callback(script13613, -2147483645), int0);
    return;
}