//
function script7477(int0: number, int1: number, int2: number): number {
    var int3 = struct_getparam(int1, 7395);
    var int4 = 14185 as cs2enum;
    var int5 = -1;
    var int6 = -1;
    if (((int3 >= 0) && (script2222(int3) > 0))) {
        if ((script6799(int3) == 1)) {
            int4 = 14186 as cs2enum;
        };
        int6 = (int6 + 1);
        while ((int6 < ENUM_GETOUTPUTCOUNT(int4))) {
            int5 = script9101(enum_getvalue(0, 73, int4, int6));
            if ((script6807(int3, struct_getparam(int5, 6670)) == 1)) {
                var int0 = script7482("", struct_getparam(int5, 2802), -1, "", script7484(int0, int2));
            };
        };
    };
    return int0;
}