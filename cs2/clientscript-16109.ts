//
function script16109(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: unknown_int, int9: unknown_int, int10: int, int11: unknown_int): void {
    if ((int11 == 1)) {
        if ((MODULO(int10, 2) == 0)) {
            script10033(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, 4352 as dbrow);
        } else {
            script10033(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, 4353 as dbrow);
        };
    } else if ((MODULO(int10, 2) == 0)) {
        script10033(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, 4127 as dbrow);
    } else {
        script10033(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, 4128 as dbrow);
    };
    return;
}