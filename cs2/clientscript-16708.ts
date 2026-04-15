//
function script16708(int0: component, int1: int, int2: graphic, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: unknown_int, int12: unknown_int): int {
    var int13 = 0;
    if ((int1 != 7)) {
        return int13;
    };
    script7918(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int2);
    var int4 = (int4 + 1);
    int13 = (int13 + 1);
    script7919(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, 20497 as graphic, false, false, false, 255);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, -1, 100, 0));
    int4 = (int4 + 1);
    int13 = (int13 + 1);
    script7919(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, 20527, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, 1, 0, 0));
    return int13;
}