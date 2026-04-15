//
function script14096(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int, int7: int, int8: int, int9: unknown_int, int10: unknown_int): void {
    var int11 = int4;
    var int12 = int7;
    if (((CC_FIND(int0, int1) == 1) || (IF_FIND(int0) == 1))) {
        if ((int5 > 0)) {
            int11 = MIN(MAX(int4, script12452(int2, int3, int4, int5, int10)), (int4 + int5));
        } else if ((int5 < 0)) {
            int11 = MAX(MIN(int4, script12452(int2, int3, int4, int5, int10)), (int4 + int5));
        };
        if ((int8 > 0)) {
            int12 = MIN(MAX(int7, script12452(int2, int3, int7, int8, int10)), (int7 + int8));
        } else if ((int8 < 0)) {
            int12 = MAX(MIN(int7, script12452(int2, int3, int7, int8, int10)), (int7 + int8));
        };
        CC_SETSIZE(int11, int12, int6, int9);
        if ((++int2 <= int3)) {
            CC_SETONTIMER(callback(script14096, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10));
            script15058(int0);
        } else {
            CC_SETONTIMER(callback());
            script15059(int0);
        };
    };
    return;
}