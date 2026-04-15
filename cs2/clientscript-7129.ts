//
function script7129(int0: obj, int1: int, int2: component): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int3 = 0;
    var int4 = 2;
    var int5 = int1;
    var int6 = 0;
    var int7 = SCALE(3, 4, 32);
    var int8 = SCALE(3, 4, 36);
    CC_DELETEALL(int2);
    [int5, int3] = script7130(int0, int3, int5, int2);
    int3 = IF_GETNEXTSUBID(int2);
    var int9 = item_getparam(int0, 2655);
    var int10 = script14490(int0, 1);
    var int11 = item_getparam(int0, 4134);
    var int12 = item_getparam(int0, 2686);
    var int13 = item_getparam(int0, 2675);
    var int14 = 0;
    var int15 = item_getparam(int0, 5456);
    var int16 = struct_getparam(int13, 5456);
    var int17 = 1;
    var int18 = 0;
    var int19 = script7112(int0);
    var int20 = 1;
    while (((int9 != -1 as obj) || (int13 != -1 as struct))) {
        if ((int13 != -1 as struct)) {
            int9 = struct_getparam(int13, 2655);
            int10 = struct_getparam(int13, 2665);
            if (((int9 != -1 as obj) && (int10 != 0))) {
                [int9, int16, int10] = script2734(int0, int9, int16, int10);
                int5 = (int5 + int4);
                if ((item_getparam(int0, 3733) == true)) {
                    [int18, int14] = script2961(int0, int13, int19);
                } else {
                    int18 = script7111(int13, int19);
                    if (((int18 >= int10) || (int18 == -1))) {
                        int14 = 1;
                    } else {
                        int14 = 0;
                    };
                };
                int9 = struct_getparam(int13, 2655);
                int10 = struct_getparam(int13, 2665);
                [int9, int16, int10] = script2734(int0, int9, int16, int10);
                if ((struct_getparam(int13, 2686) == false)) {
                    int10 = (int10 * script18374(int0));
                };
                [int3, int5] = script7131(int0, 3, int5, 1, 2, int9, int13, int15, int10, int18, int14, int2, int3);
                int5 = (int5 + int4);
            };
        } else if ((int10 != 0)) {
            [int9, int15, int10] = script2734(int0, int9, int15, int10);
            int5 = (int5 + int4);
            if ((int10 == -1)) {
                int10 = 1;
            };
            if ((int11 == true)) {
                int18 = script7115(int0, int10, int9, int15, 1);
            } else {
                int18 = script7115(int0, -1, int9, int15, 1);
            };
            if (((int18 >= int10) || (int18 == -1))) {
                int14 = 1;
            } else {
                int14 = 0;
            };
            if ((int12 == false)) {
                int10 = (int10 * script18374(int0));
            };
            [int3, int5] = script7131(int0, 3, int5, 1, 2, int9, -1 as struct, int15, int10, int18, int14, int2, int3);
            int5 = (int5 + int4);
        };
        switch (++int17) {
            case 2: {
                int9 = item_getparam(int0, 2656);
                int10 = MAX(0, script14490(int0, 2));
                int11 = item_getparam(int0, 4135);
                int12 = item_getparam(int0, 2687);
                int13 = item_getparam(int0, 2676);
                int15 = item_getparam(int0, 5457);
                break;
            }
            case 3: {
                int9 = item_getparam(int0, 2657);
                int10 = MAX(0, script14490(int0, 3));
                int11 = item_getparam(int0, 4136);
                int12 = item_getparam(int0, 2688);
                int13 = item_getparam(int0, 2677);
                int15 = item_getparam(int0, 5458);
                break;
            }
            case 4: {
                int9 = item_getparam(int0, 2658);
                int10 = MAX(0, script14490(int0, 4));
                int11 = item_getparam(int0, 4137);
                int12 = item_getparam(int0, 2689);
                int13 = item_getparam(int0, 2678);
                int15 = item_getparam(int0, 5459);
                break;
            }
            case 5: {
                int9 = item_getparam(int0, 2659);
                int10 = MAX(0, script14490(int0, 5));
                int11 = item_getparam(int0, 4138);
                int12 = item_getparam(int0, 2690);
                int13 = item_getparam(int0, 2679);
                int15 = item_getparam(int0, 5460);
                break;
            }
            case 6: {
                int9 = item_getparam(int0, 2660);
                int10 = MAX(0, script14490(int0, 6));
                int11 = item_getparam(int0, 4139);
                int12 = item_getparam(int0, 2691);
                int13 = item_getparam(int0, 2680);
                int15 = item_getparam(int0, 5461);
                break;
            }
            case 7: {
                int9 = item_getparam(int0, 2661);
                int10 = MAX(0, script14490(int0, 7));
                int11 = item_getparam(int0, 4140);
                int12 = item_getparam(int0, 2692);
                int13 = item_getparam(int0, 2681);
                int15 = item_getparam(int0, 5462);
                break;
            }
            case 8: {
                int9 = item_getparam(int0, 2662);
                int10 = MAX(0, script14490(int0, 8));
                int11 = item_getparam(int0, 4141);
                int12 = item_getparam(int0, 2693);
                int13 = item_getparam(int0, 2682);
                int15 = item_getparam(int0, 5463);
                break;
            }
            case 9: {
                int9 = item_getparam(int0, 2663);
                int10 = MAX(0, script14490(int0, 9));
                int11 = item_getparam(int0, 4142);
                int12 = item_getparam(int0, 2694);
                int13 = item_getparam(int0, 2683);
                int15 = item_getparam(int0, 5464);
                break;
            }
            case 10: {
                int9 = item_getparam(int0, 2664);
                int10 = MAX(0, script14490(int0, 10));
                int11 = item_getparam(int0, 4143);
                int12 = item_getparam(int0, 2695);
                int13 = item_getparam(int0, 2684);
                int15 = item_getparam(int0, 5465);
                break;
            }
            default: {
                int9 = -1 as obj;
                int13 = -1 as struct;
                break;
            }
        };
    };
    if ((int5 == int4)) {
        int5 = 0;
    } else {
        int5 = (int5 + 10);
    };
    IF_SETSIZE(IF_GETWIDTH(int2), int5, 0, 0, int2);
    return int5;
}