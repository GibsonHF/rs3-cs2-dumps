//
function script14365(int0: int, int1: obj, int2: obj, int3: int, int4: inv, int5: int, int6: int, int7: obj, int8: obj, int9: int, int10: int): void {
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
        script14367(int4, -1 as obj, 0);
    };
    return;
}