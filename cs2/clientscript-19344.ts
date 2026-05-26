//
function script19344(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    if ((int1 == -1)) {
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