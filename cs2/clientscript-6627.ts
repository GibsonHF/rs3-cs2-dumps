//
function script6627(int0: component): void {
    var int1 = 100;
    var int2 = 215 as inv;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as obj;
    var int10 = comp(1323, 45);
    var int11 = 6060 as cs2enum;
    if ((varbitplayer_9391 == 160)) {
        int11 = 6061 as cs2enum;
    };
    define_array[33](ENUM_GETOUTPUTCOUNT(int11));
    while ((int6 < ENUM_GETOUTPUTCOUNT(int11))) {
        int3 = 0;
        int9 = enum_getvalue(0, 33, 6062 as cs2enum, int6);
        if ((INV_TOTAL(215 as inv, int9) == 0)) {
            while ((int3 < int1)) {
                if ((INV_GETOBJ(int2, int3) == enum_getvalue(33, 33, 6065 as cs2enum, int9))) {
                    CC_CREATE(int0, 5, int4);
                    if ((INV_GETOBJ(int2, (int3 + 1)) == enum_getvalue(33, 33, 6065 as cs2enum, int9))) {
                        int5 = 1;
                    } else {
                        int5 = 2;
                    };
                    if ((int5 == 2)) {
                        if ((enum_getvalue(0, 0, int11, int6) == 1)) {
                            CC_SETGRAPHIC(12169 as graphic);
                            [int7, int8] = [20, 20];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 2)) {
                            CC_SETGRAPHIC(12167 as graphic);
                            [int7, int8] = [20, 40];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 3)) {
                            CC_SETGRAPHIC(12163 as graphic);
                            [int7, int8] = [20, 60];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 4)) {
                            CC_SETGRAPHIC(12159 as graphic);
                            [int7, int8] = [20, 80];
                        };
                        CC_SETSIZE(int7, int8, 0, 0);
                    };
                    if ((int5 == 1)) {
                        if ((enum_getvalue(0, 0, int11, int6) == 1)) {
                            CC_SETGRAPHIC(12168 as graphic);
                            [int7, int8] = [20, 20];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 2)) {
                            CC_SETGRAPHIC(12166 as graphic);
                            [int7, int8] = [40, 20];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 3)) {
                            CC_SETGRAPHIC(12162 as graphic);
                            [int7, int8] = [60, 20];
                        };
                        if ((enum_getvalue(0, 0, int11, int6) == 4)) {
                            CC_SETGRAPHIC(12158 as graphic);
                            [int7, int8] = [80, 20];
                        };
                        CC_SETSIZE(int7, int8, 0, 0);
                    };
                    if ((CC_FIND[1](int10, int3) == 1)) {
                        CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                    };
                    int3 = int1;
                    int4 = (int4 + 1);
                } else {
                    int3 = (int3 + 1);
                };
            };
        };
        int6 = (int6 + 1);
    };
    return;
}