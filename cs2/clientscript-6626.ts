//
function script6626(int0: number): void {
    var int1 = 100;
    var int2 = 674;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 86704134;
    var int10 = 6060 as cs2enum;
    if ((varbitplayer_9391 == 160)) {
        int10 = 6061 as cs2enum;
    };
    while ((int6 < ENUM_GETOUTPUTCOUNT(int10))) {
        int3 = 0;
        while ((int3 < int1)) {
            if (((INV_GETOBJ(int2, int3) == enum_getvalue(0, 33, 6062 as cs2enum, int6)) || (INV_GETOBJ(int2, int3) == enum_getvalue(0, 33, 6063 as cs2enum, int6)))) {
                CC_CREATE(int0, 5, int4);
                int5 = script6614(int6);
                if ((int5 == 2)) {
                    if ((enum_getvalue(0, 0, int10, int6) == 1)) {
                        CC_SETGRAPHIC(12169);
                        [int7, int8] = [20, 20];
                    };
                    if ((enum_getvalue(0, 0, int10, int6) == 2)) {
                        CC_SETGRAPHIC(12167);
                        [int7, int8] = [20, 40];
                    };
                    if ((enum_getvalue(0, 0, int10, int6) == 3)) {
                        CC_SETGRAPHIC(12163);
                        [int7, int8] = [20, 60];
                    };
                    if ((enum_getvalue(0, 0, int10, int6) == 4)) {
                        CC_SETGRAPHIC(12159);
                        [int7, int8] = [20, 80];
                    };
                    CC_SETSIZE(int7, int8, 0, 0);
                };
                if ((int5 == 1)) {
                    if ((varbitplayer_9391 == 160)) {
                        if ((int6 == 0)) {
                            CC_SETGRAPHIC(12231);
                            [int7, int8] = [80, 20];
                        };
                        if ((int6 == 1)) {
                            CC_SETGRAPHIC(12232);
                            [int7, int8] = [80, 20];
                        };
                        CC_SETSIZE(int7, int8, 0, 0);
                    } else {
                        if ((enum_getvalue(0, 0, int10, int6) == 1)) {
                            CC_SETGRAPHIC(12168);
                            [int7, int8] = [20, 20];
                        };
                        if ((enum_getvalue(0, 0, int10, int6) == 2)) {
                            CC_SETGRAPHIC(12166);
                            [int7, int8] = [40, 20];
                        };
                        if ((enum_getvalue(0, 0, int10, int6) == 3)) {
                            CC_SETGRAPHIC(12162);
                            [int7, int8] = [60, 20];
                        };
                        if ((enum_getvalue(0, 0, int10, int6) == 4)) {
                            CC_SETGRAPHIC(12158);
                            [int7, int8] = [80, 20];
                        };
                        CC_SETSIZE(int7, int8, 0, 0);
                    };
                };
                if ((CC_FIND[1](int9, int3) == 1)) {
                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                };
                int3 = int1;
                int4 = (int4 + 1);
            } else {
                int3 = (int3 + 1);
            };
        };
        int6 = (int6 + 1);
    };
    return;
}