//
function script7000(int0: obj, int1: unknown_int, int2: int): int {
    var int3 = -1;
    var int4 = 0;
    var string0 = "";
    var int5 = 1;
    if ((int1 == 94)) {
        while ((int5 <= 8)) {
            [int4, string0] = script3290(int0, int5, 1, int2);
            if ((int4 == 1)) {
                return int5;
            };
            int5 = (int5 + 1);
        };
    } else {
        if ((STRING_LENGTH(OC_IOP(int0, 1)) > 0)) {
            return 1;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 2)) > 0)) {
            return 2;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 3)) > 0)) {
            return 3;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 4)) > 0)) {
            return 4;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 5)) > 0)) {
            return 5;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 6)) > 0)) {
            return 6;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 7)) > 0)) {
            return 7;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 8)) > 0)) {
            return 8;
        };
        if ((STRING_LENGTH(OC_IOP(int0, 9)) > 0)) {
            return 9;
        };
    };
    return 1;
}