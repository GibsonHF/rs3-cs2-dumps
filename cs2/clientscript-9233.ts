//
function script9233(int0: component, int1: component, int2: component, int3: component, int4: inv, int5: unknown_int, int6: int, int7: int, int8: unknown_int): void {
    if (((int6 == -1) || (int7 == -1))) {
        var [int6, int7] = script5822(int4);
    };
    script9237(int0, int1, int2, int3, int4, int5, int6, int7, int8);
    IF_SETONINVTRANSMIT(callback(script9232, int0, int1, int2, int4, int6, int7, int8, int4, 1), int1);
    IF_SETONVARTRANSMIT(callback(script9231, int0, int1, int2, int3, int4, int5, int6, int7, int8, 3680, 1), int1);
    script9238(int1, int2, int4, int6, int7, int8);
    return;
}