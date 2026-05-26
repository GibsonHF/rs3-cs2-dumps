//
function script13041(int0: number, int1: number, int2: number): number {
    var int3 = 2;
    var int4 = 0;
    var int5 = 0;
    if ((script4034(int0) == 1)) {
        var int0 = 20767;
    };
    if ((item_getparam(int0, 6295) == 1)) {
        int3 = 3;
    };
    while ((int3 > 0)) {
        [int4, int5] = script470(int0, int3);
        if ((int4 == int1)) {
            if (((int2 == 1) && (int5 == 0))) {
                return 0;
            };
            return 1;
        };
        int3 = (int3 - 1);
    };
    return 0;
}