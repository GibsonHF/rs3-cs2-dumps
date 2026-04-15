//
function script6967(int0: component, int1: int, int2: obj, int3: int, int4: int, int5: int, int6: unknown_int, string0: string): void {
    if ((script4761(25) == 0)) {
        return;
    };
    if ((varclient_4083 == 4)) {
        return;
    };
    var int7 = comp(1253, 519);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if (((IF_GETHIDE(int7) == false) && ((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1))))) {
        int9 = IF_GETWIDTH(int7);
        int8 = ((script1743() + (CC_GETWIDTH() / 2)) - (script3365(int7) + (int9 / 2)));
        int10 = ((int9 - 35) / 2);
        int8 = MAX(MIN(int8, int10), (0 - int10));
        int8 = ((int8 + (int9 / 2)) - 9);
        IF_SETPOSITION(int8, 0, 0, 2, comp(1253, 531));
        IF_SETSIZE((int8 - 17), 18, 0, 0, comp(1253, 528));
        IF_SETSIZE(((int9 - int8) - 34), 18, 0, 0, comp(1253, 529));
        return;
    };
    script9673(int0, int1, int2, int3, int4, string0, int5, int6);
    return;
}