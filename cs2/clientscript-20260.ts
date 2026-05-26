//
function script20260(int0: number, int1: number): [number, number] {
    var int2 = 4;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = 140;
    var int7 = script20261(int1);
    var int8 = -1;
    while ((int3 < int0)) {
        if ((CC_FINDBYCATEGORY(94568456, 200, int3) == 1)) {
            if ((int4 == cc_getparam(9342))) {
                int5 = (int5 + 1);
            } else {
                int4 = cc_getparam(9342);
                int5 = 1;
            };
            CC_SETSIZE(int6, 0, 0, 1);
            CC_SETPOSITION(int2, 0, 0, 0);
            if ((CC_FINDBYCATEGORY(94568455, int4, 0) == 1)) {
                CC_SETSIZE(((int6 * int5) + (15 * (int5 - 1))), 0, 0, 1);
                if ((int5 == 1)) {
                    CC_SETPOSITION(int2, 0, 0, 1);
                    if ((int4 == int7)) {
                        int8 = int3;
                    };
                };
            };
            int2 = (int2 + (int6 + 15));
        };
        int3 = (int3 + 1);
    };
    return [(int2 + 4), int8];
}