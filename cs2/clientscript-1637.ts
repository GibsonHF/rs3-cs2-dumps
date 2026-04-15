//
function script1637(int0: component, int1: graphic, int2: graphic, int3: graphic, int4: graphic, int5: int, int6: int, int7: int, int8: int, int9: int, int10: unknown_int, int11: unknown_int): void {
    var int12 = (0 - int6);
    var int13 = 233;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    if ((IF_FIND(int0) == 1)) {
        [int13, int14] = script3874(int9);
        if ((CC_FINDBYCATEGORY(int0, int13, int14) == 1)) {
            CC_SETHIDE(false);
            int15 = cc_getparam(8959);
            int16 = cc_getparam(8960);
            int17 = cc_getparam(8961);
            int18 = cc_getparam(8962);
            switch (int11) {
                case 1: {
                    script2955(int0, int13, int15, int5, int6, int7, int8, 1, 0, 1, int1, int2, int3, int4);
                    int19 = 1;
                    script2955(int0, int13, int16, int5, int6, int7, int8, 2, 1, 1, int1, int2, int3, int4);
                    int20 = 0;
                    script2955(int0, int13, int17, int5, int6, int7, int8, 2, 3, 1, int1, int2, int3, int4);
                    int21 = 1;
                    script2955(int0, int13, int18, int5, int6, int7, int8, 1, 2, 1, int1, int2, int3, int4);
                    int22 = 0;
                    CC_SETONTIMER(callback(script3058, int0, int13, int14, int6, int7, int8, int15, int16, int17, int18, int10, int19, int20, int21, int22));
                    break;
                }
                case 2: {
                    script2955(int0, int13, int15, int5, int6, int7, int8, 1, 0, 1, int1, int2, int3, int4);
                    int19 = 1;
                    script2955(int0, int13, int16, int5, int6, int7, int8, 2, 1, 1, int1, int2, int3, int4);
                    int20 = 0;
                    script2955(int0, int13, int18, int5, int6, int7, int8, 3, 2, 1, int1, int2, int3, int4);
                    int22 = 0;
                    script2955(int0, int13, int17, int5, int6, int7, int8, 0, 3, 1, int1, int2, int3, int4);
                    int21 = 0;
                    CC_SETONTIMER(callback(script3417, int0, int13, int14, int6, int7, int8, int15, int16, int17, int18, int10, int19, int20, int21, int22));
                    break;
                }
                case 3: {
                    script2955(int0, int13, int17, int5, int6, int7, int8, 2, 3, 1, int1, int2, int3, int4);
                    int21 = 1;
                    script2955(int0, int13, int18, int5, int6, int7, int8, 1, 2, 1, int1, int2, int3, int4);
                    int22 = 0;
                    script2955(int0, int13, int16, int5, int6, int7, int8, 0, 1, 1, int1, int2, int3, int4);
                    int20 = 0;
                    script2955(int0, int13, int15, int5, int6, int7, int8, 3, 0, 1, int1, int2, int3, int4);
                    int19 = 0;
                    CC_SETONTIMER(callback(script3542, int0, int13, int14, int6, int7, int8, int15, int16, int17, int18, int10, int19, int20, int21, int22));
                    break;
                }
            };
        };
    };
    return;
}