//
function script7783(int0: obj, int1: int, int2: int, int3: unknown_int, int4: int, int5: unknown_int): int {
    var int6 = 0;
    var int7 = 93 as inv;
    var int8 = 0;
    var int9 = script12422(int1, 1, int2);
    if ((int3 == 1)) {
        int7 = 95 as inv;
        int8 = script3999(int0);
    } else {
        int8 = (INV_SIZE(93 as inv) - int4);
        if ((int5 == 1)) {
            var int0 = OC_CERT(int0);
        };
    };
    int6 = script3793(int7, int0, int9, int8);
    if ((int6 > 0)) {
        var int1 = ((int9 - int6) / int2);
    };
    return int1;
}