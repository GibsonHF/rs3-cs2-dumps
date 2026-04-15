//
function script16709(int0: component, int1: int, int2: graphic, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int, int12: int, int13: int, int14: unknown_int, int15: unknown_int): unknown_int {
    if ((int1 != 7)) {
        return 0;
    };
    script15939(int0, int3, int4, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15);
    script7920(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, int2);
    script7922(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, 20497 as graphic, false, false, false, 255);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, -1, 100, 0));
    script7922(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, 20527, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, 1, 0, 0));
    return 1;
}