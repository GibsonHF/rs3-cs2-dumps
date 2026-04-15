//
function script1638(int0: component, int1: component, int2: int, int3: int, int4: unknown_int, int5: int, int6: int, int7: unknown_int): void {
    var int8 = int5;
    var int9 = (int2 + 1);
    if ((IF_FIND(int0) == 1)) {
        if ((int6 > 0)) {
            int8 = MIN(MAX(int5, script12452(int2, int3, int5, int6, int4)), (int5 + int6));
        } else if ((int6 < 0)) {
            int8 = MAX(MIN(int5, script12452(int2, int3, int5, int6, int4)), (int5 + int6));
        };
        script1702(int0, int1, int8, 1);
        if ((int9 <= int3)) {
            IF_SETONTIMER(callback(script1638, int0, int1, int9, int3, int4, int5, int6, int7), int0);
        } else {
            IF_SETONTIMER(callback(), int0);
        };
    };
    return;
}