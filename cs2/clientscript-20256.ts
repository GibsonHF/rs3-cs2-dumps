//
function script20256(int0: dbrow, int1: int, int2: int, int3: int, int4: int, int5: int, int6: boolean, int7: boolean): int {
    if ((int2 >= DB_GETFIELDCOUNT(int0, 1343504))) {
        return int4;
    };
    var int8 = ((int5 * 76) + MAX(0, ((int5 + 1) * 15)));
    script15939(comp(1443, 8), int1, int2, 200, int3, 0, int8, 0, 0, 0, 76, 1, 0);
    CC_SENDTOFRONT();
    return script20257(int0, int1, int2, int4, int5, int6, int7, 0);
}