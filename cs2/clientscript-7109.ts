//
function script7109(int0: obj, int1: struct, int2: int, int3: int, int4: unknown_int): [int, unknown_int] {
    if ((int1 == -1 as struct)) {
        return [0, 0];
    };
    var int5 = struct_getparam(int1, 2655);
    var int6 = struct_getparam(int1, 2665);
    var int7 = struct_getparam(int1, 5456);
    var int8 = struct_getparam(int1, 2686);
    var int9 = 0;
    var int10 = 0;
    var int11 = 1;
    var int12 = script7110(int1);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    while ((int5 != -1 as obj)) {
        if ((int6 != 0)) {
            [int5, int7, int6] = script2734(int0, int5, int7, int6);
            int10 = script7115(-1 as obj, -1, int5, int7, int4);
            if (((OC_STACKABLE(int5) == 1) && (int10 != 0))) {
                int15 = 1;
            };
            if ((int10 == -1)) {
                int9 = 2147483647;
                int11 = 2147483647;
            } else if ((int8 == false)) {
                int9 = (int9 + (int10 / (int6 * int2)));
                int13 = (int13 + (MODULO(int10, (int6 * int2)) / int6));
                int14 = (int14 + ((MODULO(MODULO(int10, (int6 * int2)), int6) * int12) / int6));
            } else {
                int9 = script11882(int9, (int10 / int6));
            };
        };
        switch (++int11) {
            case 2: {
                int5 = struct_getparam(int1, 2656);
                int6 = struct_getparam(int1, 2666);
                int8 = struct_getparam(int1, 2687);
                int7 = struct_getparam(int1, 5457);
                break;
            }
            case 3: {
                int5 = struct_getparam(int1, 2657);
                int6 = struct_getparam(int1, 2667);
                int8 = struct_getparam(int1, 2688);
                int7 = struct_getparam(int1, 5458);
                break;
            }
            case 4: {
                int5 = struct_getparam(int1, 2658);
                int6 = struct_getparam(int1, 2668);
                int8 = struct_getparam(int1, 2689);
                int7 = struct_getparam(int1, 5459);
                break;
            }
            case 5: {
                int5 = struct_getparam(int1, 2659);
                int6 = struct_getparam(int1, 2669);
                int8 = struct_getparam(int1, 2690);
                int7 = struct_getparam(int1, 5460);
                break;
            }
            case 6: {
                int5 = struct_getparam(int1, 2660);
                int6 = struct_getparam(int1, 2670);
                int8 = struct_getparam(int1, 2691);
                int7 = struct_getparam(int1, 5461);
                break;
            }
            case 7: {
                int5 = struct_getparam(int1, 2661);
                int6 = struct_getparam(int1, 2671);
                int8 = struct_getparam(int1, 2692);
                int7 = struct_getparam(int1, 5462);
                break;
            }
            case 8: {
                int5 = struct_getparam(int1, 2662);
                int6 = struct_getparam(int1, 2672);
                int8 = struct_getparam(int1, 2693);
                int7 = struct_getparam(int1, 5463);
                break;
            }
            case 9: {
                int5 = struct_getparam(int1, 2663);
                int6 = struct_getparam(int1, 2673);
                int8 = struct_getparam(int1, 2694);
                int7 = struct_getparam(int1, 5464);
                break;
            }
            case 10: {
                int5 = struct_getparam(int1, 2664);
                int6 = struct_getparam(int1, 2674);
                int8 = struct_getparam(int1, 2695);
                int7 = struct_getparam(int1, 5465);
                break;
            }
            case 11: {
                int5 = struct_getparam(int1, 5451);
                int6 = struct_getparam(int1, 5471);
                int8 = struct_getparam(int1, 5476);
                int7 = struct_getparam(int1, 5466);
                break;
            }
            case 12: {
                int5 = struct_getparam(int1, 5452);
                int6 = struct_getparam(int1, 5472);
                int8 = struct_getparam(int1, 5477);
                int7 = struct_getparam(int1, 5467);
                break;
            }
            case 13: {
                int5 = struct_getparam(int1, 5453);
                int6 = struct_getparam(int1, 5473);
                int8 = struct_getparam(int1, 5478);
                int7 = struct_getparam(int1, 5468);
                break;
            }
            case 14: {
                int5 = struct_getparam(int1, 5454);
                int6 = struct_getparam(int1, 5474);
                int8 = struct_getparam(int1, 5479);
                int7 = struct_getparam(int1, 5469);
                break;
            }
            case 15: {
                int5 = struct_getparam(int1, 5455);
                int6 = struct_getparam(int1, 5475);
                int8 = struct_getparam(int1, 5480);
                int7 = struct_getparam(int1, 5470);
                break;
            }
            case 16: {
                int5 = struct_getparam(int1, 4347);
                int6 = struct_getparam(int1, 8906);
                int8 = struct_getparam(int1, 8921);
                int7 = struct_getparam(int1, 4367);
                break;
            }
            case 17: {
                int5 = struct_getparam(int1, 4351);
                int6 = struct_getparam(int1, 8910);
                int8 = struct_getparam(int1, 9120);
                int7 = struct_getparam(int1, 4371);
                break;
            }
            case 18: {
                int5 = struct_getparam(int1, 4363);
                int6 = struct_getparam(int1, 8917);
                int8 = struct_getparam(int1, 9121);
                int7 = struct_getparam(int1, 8284);
                break;
            }
            default: {
                int5 = -1 as obj;
                break;
            }
        };
    };
    if (((int13 + int14) > 0)) {
        int13 = (int13 + (int14 / int12));
        int9 = (int9 + (int13 / int2));
        if (((MODULO((int14 / int12), int2) + MODULO(int13, int2)) > 0)) {
            int9 = (int9 + 1);
        };
    };
    if ((varplayer_1171 > 0)) {
        int9 = MIN(int9, varplayer_1171);
    };
    return [int9, int15];
}