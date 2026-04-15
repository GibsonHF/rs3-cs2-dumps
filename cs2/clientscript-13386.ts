//
function script13386(int0: cs2enum): int {
    var int1 = varclient_6045;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    if ((int0 == 12591 as cs2enum)) {
        int1 = varclient_6040;
        int2 = (int2 - 2);
    };
    var int3 = RANDOM(int2);
    var int4 = enum_getvalue(0, 73, int0, int3);
    while ((((int3 != 0) && (int4 == 1579 as struct)) || (int4 == enum_getvalue(0, 73, int0, int1)))) {
        int3 = RANDOM(int2);
        int4 = enum_getvalue(0, 73, int0, int3);
    };
    return int3;
}