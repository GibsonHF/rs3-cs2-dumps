//
function script9236(int0: component, int1: component, int2: component, int3: inv, int4: unknown_int, int5: int, int6: int, int7: unknown_int, string0: string): void {
    if (((int5 == -1) || (int6 == -1))) {
        var [int5, int6] = script5822(int3);
    };
    script9237(int0, int1, comp(-1, 65535), int2, int3, int4, int5, int6, int7);
    IF_SETONINVTRANSMIT(callback(script9235, int0, int1, int3, int5, int6, int7, string0, int3, 1), int1);
    if ((((int1 == 33882127) || (int1 == comp(517, 35))) || (int1 == comp(1313, 14)))) {
        IF_SETONVARTRANSMIT(callback(script9235, int0, int1, int3, int5, int6, int7, string0, 111, 8958, 2), int1);
    } else {
        IF_SETONVARTRANSMIT(callback(script9234, int0, int1, int2, int3, int4, int5, int6, int7, string0, 3680, 1), int1);
    };
    script9239(int0, int1, int3, int5, int6, int7, string0);
    return;
}