//
function script16708(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number): number {
    var int13 = 0;
    if ((int1 != 7)) {
        return int13;
    };
    script7918(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int2);
    var int4 = (int4 + 1);
    int13 = (int13 + 1);
    script7919(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, 20497, 0, 0, 0, 255);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, -1, 100, 0));
    int4 = (int4 + 1);
    int13 = (int13 + 1);
    script7919(int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, 20527, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, 1, 0, 0));
    return int13;
}