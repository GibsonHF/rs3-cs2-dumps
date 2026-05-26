//
function script2337(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    if ((int1 == -1 as obj)) {
        return 0;
    };
    if ((int2 == -1)) {
        var int2 = script14352(int0, int1);
    } else {
        int2 = MIN(int2, script14352(int0, int1));
    };
    if ((int2 < 1)) {
        return 0;
    };
    var int7 = OC_UNCERT(int1);
    return script2347(int1, int7, script14339(int0, int7), int2, -1, int4, int0, int3, int5, int6);
}