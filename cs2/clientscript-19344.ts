//
function script19344(int0: inv, int1: obj, int2: int, int3: int, int4: unknown_int, int5: unknown_int): unknown_int {
    if ((int1 == -1 as obj)) {
        return 0;
    };
    if ((int2 == -1)) {
        var int2 = script19594(int0, int1);
    } else {
        int2 = MIN(int2, script19594(int0, int1));
    };
    if ((int2 < 1)) {
        return 0;
    };
    var int6 = OC_UNCERT(int1);
    var int7 = script19581(int0, int6);
    return script19345(int1, int6, int7, int2, -1, int0, int3, int4, int5);
}