//
function script13198(int0: cs2enum, int1: int): void {
    var int2 = enum_getvalue(0, 0, int0, int1);
    if ((int2 < 0)) {
        return;
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    [int3, int4, int5, int6] = script13199(int2);
    script13215(int3, int4, int5, int6);
    var int7 = comp(-1, 65535);
    switch (int0) {
        case 12197: {
            int7 = comp(1843, 214);
            break;
        }
        case 12199: {
            int7 = comp(1843, 221);
            break;
        }
    };
    if ((int7 != comp(-1, 65535))) {
        script10435(int7, -1, -1, -1, int0, -1 as cs2enum, (ENUM_GETOUTPUTCOUNT(int0) - 1), int1, 0, 0);
    };
    return;
}