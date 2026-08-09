//
function script9233(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if (((int6 == -1) || (int7 == -1))) {
        [int6, int7] = script5822(int4);
    };
    script9237(int0, int1, int2, int3, int4, int5, int6, int7, int8);
    IF_SETONINVTRANSMIT(callback(script9232, int0, int1, int2, int4, int6, int7, int8, int4, 1), int1);
    IF_SETONVARTRANSMIT(callback(script9231, int0, int1, int2, int3, int4, int5, int6, int7, int8, 3680, 1), int1);
    script9238(int1, int2, int4, int6, int7, int8);
    return;
}