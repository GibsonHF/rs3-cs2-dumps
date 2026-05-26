//
function script13198(int0: number, int1: number): void {
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
    var int7 = -1;
    switch (int0) {
        case 12197: {
            int7 = 120783062;
            break;
        }
        case 12199: {
            int7 = 120783069;
            break;
        }
    };
    if ((int7 != -1)) {
        script10435(int7, -1, -1, -1, int0, -1, (ENUM_GETOUTPUTCOUNT(int0) - 1), int1, 0, 0);
    };
    return;
}