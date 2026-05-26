//
function script14365(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((CC_FIND(comp(517, 201), int0) == 1)) {
        script13796(int8, int9);
    };
    if ((CC_FIND(script14074(int4), int5) == 1)) {
        if ((int10 == 1)) {
            script14367(int4, int2, int3);
        } else {
            script14367(int4, int1, int3);
        };
    };
    if (((int6 != int5) && (CC_FIND(script14074(int4), int6) == 1))) {
        script14367(int4, -1, 0);
    };
    return;
}