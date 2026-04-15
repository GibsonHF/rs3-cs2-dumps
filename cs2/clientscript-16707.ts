//
function script16707(int0: component, int1: int, int2: graphic, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: unknown_int, int11: unknown_int, int12: unknown_int): int {
    var int13 = 0;
    if ((int1 != 7)) {
        return int13;
    };
    script2994(int0, int3, int4, int5, int6, int7, int8, int9, int10, int11, int2);
    var int3 = (int3 + 1);
    int13 = (int13 + 1);
    var int14 = 20497 as graphic;
    if ((int12 == 1)) {
        int14 = 33760 as graphic;
    };
    script7917(int0, int3, int4, int5, int6, int7, int8, int9, int10, int11, int14, false, false, false, 255);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, -1, 100, 0));
    int3 = (int3 + 1);
    int13 = (int13 + 1);
    int14 = 20527;
    if ((int12 == 1)) {
        int14 = 33767 as graphic;
    };
    script7917(int0, int3, int4, int5, int6, int7, int8, int9, int10, int11, int14, false, false, false, 0);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, 1, 0, 0));
    return int13;
}