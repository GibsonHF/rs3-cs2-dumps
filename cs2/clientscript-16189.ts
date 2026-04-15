//
function script16189(int0: dbrow, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component, int7: struct, int8: int): void {
    var int9 = 0;
    var int10 = -1 as dbrow;
    var int11 = 0;
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var string0 = "";
    var int16 = 0;
    var int17 = -1;
    var int18 = -1 as graphic;
    var int19 = 0;
    var int20 = -1;
    var int21 = -1;
    [int9, int10, int11] = dbrow_getfield(int0, 602112, int1);
    int11 = script4577(int0, int9, int11);
    var int22 = script16166(int0);
    var int23 = script16168(int10);
    var int24 = (script16169(int10, int7) * 4);
    var int25 = 0;
    var int26 = 0;
    while ((++int21 < int24)) {
        int25 = (int3 + int21);
        switch (MODULO(int21, 4)) {
            case 0: {
                [int12, int13, int14, int15, int20] = script16170(int10, int20, int7);
                if ((IF_CREATENESTED(5, int2, int25, int4, int5, int6) == 1)) {
                    CC_SETPOSITION(0, 0, 1, 1);
                    CC_SETSIZE(36, 32, 0, 0);
                    CC_SETOBJECT(int12, int13);
                };
                break;
            }
            case 1: {
                if ((IF_CREATENESTED(4, int2, int25, int4, int5, int6) == 1)) {
                    script16190();
                    if ((STRING_LENGTH(item_getparam(int12, 9096)) > 0)) {
                        string0 = item_getparam(int12, 9096);
                    } else {
                        string0 = OC_NAME(int12);
                    };
                    CC_SETTEXT(script3930(string0, int8, 3, CC_GETFONTMETRICS()));
                };
                break;
            }
            case 2: {
                int17 = SCALE(80, 118, 55);
                int18 = enum_getvalue(0, 23, 15866 as cs2enum, int14);
                int19 = script16709(int6, int14, int18, int2, int25, 2, int4, int5, 0, 0, 1, 1, int17, 50, 0, 0);
                if (((int19 == 0) && (IF_CREATENESTED(5, int2, int25, int4, int5, int6) == 1))) {
                    CC_SETGRAPHIC(int18);
                    CC_SETPOSITION(0, 0, 1, 1);
                    CC_SETSIZE(int17, 50, 0, 0);
                };
                break;
            }
            case 3: {
                if ((IF_CREATENESTED(4, int2, int25, int4, int5, int6) == 1)) {
                    script16190();
                    if ((int15 > 0)) {
                        if ((dbrow_getfield(int0, 602192, 0) == 1)) {
                            int26 = script16480(int11, int22, int15, int23, 100000);
                        } else {
                            int26 = script16167(int11, int22, int15, int23, 100000);
                        };
                        if ((int26 > 0)) {
                            CC_SETTEXT(`${script7653(int26, 3, 3, 1, 0)} %`);
                        } else {
                            CC_SETTEXT("<lt> 0.001 %");
                        };
                    } else {
                        CC_SETTEXT("");
                    };
                };
                break;
            }
        };
    };
    return;
}