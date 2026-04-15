//
function script6141(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: unknown_int): void {
    var int11 = SCALE(int1, 18, 45);
    var int12 = 0;
    var int9 = (int9 + 1);
    if ((CC_FIND(int0, 0) == 1)) {
        if ((int9 >= int8)) {
            CC_SETPOSITION((int2 + int6), (int3 + int7), 1, 1);
            if ((int10 == 1)) {
                int12 = (25 + RANDOM(50));
            } else {
                int12 = (25 + RANDOM(300));
            };
            IF_SETONTIMER(callback(script6141, -2147483645, int1, int2, int3, int6, int7, (RANDOM((int11 + int11)) - int11), (RANDOM((int11 + int11)) - int11), int12, 0, int10), int0);
            return;
        };
        CC_SETPOSITION(((int2 + int4) + SCALE(int9, int8, (int6 - int4))), ((int3 + int5) + SCALE(int9, int8, (int7 - int5))), 1, 1);
    };
    IF_SETONTIMER(callback(script6141, -2147483645, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10), int0);
    return;
}