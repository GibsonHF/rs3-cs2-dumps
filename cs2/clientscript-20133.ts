//
function script20133(int0: number, int1: number): number {
    var int2 = enum_getvalue(0, 26, int0, int1);
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    while ((int3 < int4)) {
        if ((script20136(enum_getvalue(0, 0, int2, int3)) == 0)) {
            return 0;
        };
        int3 = (int3 + 1);
    };
    return 1;
}