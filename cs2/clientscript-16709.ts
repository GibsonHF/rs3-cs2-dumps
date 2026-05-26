//
function script16709(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number): number {
    if ((int1 != 7)) {
        return 0;
    };
    script15939(int0, int3, int4, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15);
    script7920(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, int2);
    script7922(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, 20497, 0, 0, 0, 255);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, -1, 100, 0));
    script7922(int0, int5, IF_GETNEXTCATEGORYSUBID(int5, int0), int3, int4, 0, 0, 1, 1, 0, 0, 1, 1, 20527, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script16710, -2147483645, -2147483643, 1, 0, 0));
    return 1;
}