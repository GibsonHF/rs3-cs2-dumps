//
function script9236(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): void {
    if (((int5 == -1) || (int6 == -1))) {
        var [int5, int6] = script5822(int3);
    };
    script9237(int0, int1, -1, int2, int3, int4, int5, int6, int7);
    IF_SETONINVTRANSMIT(callback(script9235, int0, int1, int3, int5, int6, int7, string0, int3, 1), int1);
    if ((((int1 == 33882127) || (int1 == 33882147)) || (int1 == 86048782))) {
        IF_SETONVARTRANSMIT(callback(script9235, int0, int1, int3, int5, int6, int7, string0, 111, 8958, 2), int1);
    } else {
        IF_SETONVARTRANSMIT(callback(script9234, int0, int1, int2, int3, int4, int5, int6, int7, string0, 3680, 1), int1);
    };
    script9239(int0, int1, int3, int5, int6, int7, string0);
    return;
}