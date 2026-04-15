//
function script2625(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int): void {
    var int6 = int4;
    var int7 = (int1 + 1);
    if ((IF_FIND(int0) == 1)) {
        if ((int5 > 0)) {
            int6 = MIN(MAX(int4, script12452(int1, int2, int4, int5, int3)), (int4 + int5));
        } else if ((int5 < 0)) {
            int6 = MAX(MIN(int4, script12452(int1, int2, int4, int5, int3)), (int4 + int5));
        };
        IF_SETTRANS(int6, int0);
        if ((int7 <= int2)) {
            IF_SETONTIMER(callback(script2625, int0, int7, int2, int3, int4, int5), int0);
        } else if ((int6 == 0)) {
            script2624(int0, int6, 255, int2, int3);
        } else if ((int6 == 255)) {
            script2624(int0, int6, 0, int2, int3);
        };
    };
    return;
}