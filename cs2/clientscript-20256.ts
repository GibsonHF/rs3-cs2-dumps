//
function script20256(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): number {
    if ((int2 >= DB_GETFIELDCOUNT(int0, 1343504))) {
        return int4;
    };
    var int8 = ((int5 * 100) + MAX(0, ((int5 + 1) * 15)));
    script15939(94568456, int1, int2, 200, int3, 0, int8, 0, 0, 0, 100, 1, 0);
    CC_SENDTOFRONT();
    return script20257(int0, int1, int2, int4, int5, int7, 0);
}