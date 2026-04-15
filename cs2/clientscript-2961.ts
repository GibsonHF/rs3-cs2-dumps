//
function script2961(int0: obj, int1: struct, int2: unknown_int): [int, unknown_int] {
    if ((int1 == -1 as struct)) {
        return [0, 0];
    };
    var int3 = struct_getparam(int1, 2655);
    var int4 = struct_getparam(int1, 2665);
    var int5 = struct_getparam(int1, 5456);
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    var int9 = 0;
    while ((int3 != -1 as obj)) {
        if ((int4 != 0)) {
            [int3, int5, int4] = script2734(int0, int3, int5, int4);
            int7 = script7115(-1 as obj, -1, int3, int5, int2);
            if ((int7 == -1)) {
                int6 = 2147483647;
                int8 = 2147483647;
                int9 = 1;
            } else {
                if ((int7 > int6)) {
                    int6 = int7;
                };
                if ((int7 >= int4)) {
                    int9 = 1;
                };
            };
        };
        switch (++int8) {
            case 2: {
                int3 = struct_getparam(int1, 2656);
                int4 = struct_getparam(int1, 2666);
                int5 = struct_getparam(int1, 5457);
                break;
            }
            case 3: {
                int3 = struct_getparam(int1, 2657);
                int4 = struct_getparam(int1, 2667);
                int5 = struct_getparam(int1, 5458);
                break;
            }
            case 4: {
                int3 = struct_getparam(int1, 2658);
                int4 = struct_getparam(int1, 2668);
                int5 = struct_getparam(int1, 5459);
                break;
            }
            case 5: {
                int3 = struct_getparam(int1, 2659);
                int4 = struct_getparam(int1, 2669);
                int5 = struct_getparam(int1, 5460);
                break;
            }
            case 6: {
                int3 = struct_getparam(int1, 2660);
                int4 = struct_getparam(int1, 2670);
                int5 = struct_getparam(int1, 5461);
                break;
            }
            case 7: {
                int3 = struct_getparam(int1, 2661);
                int4 = struct_getparam(int1, 2671);
                int5 = struct_getparam(int1, 5462);
                break;
            }
            case 8: {
                int3 = struct_getparam(int1, 2662);
                int4 = struct_getparam(int1, 2672);
                int5 = struct_getparam(int1, 5463);
                break;
            }
            case 9: {
                int3 = struct_getparam(int1, 2663);
                int4 = struct_getparam(int1, 2673);
                int5 = struct_getparam(int1, 5464);
                break;
            }
            case 10: {
                int3 = struct_getparam(int1, 2664);
                int4 = struct_getparam(int1, 2674);
                int5 = struct_getparam(int1, 5465);
                break;
            }
            case 11: {
                int3 = struct_getparam(int1, 5451);
                int4 = struct_getparam(int1, 5471);
                int5 = struct_getparam(int1, 5466);
                break;
            }
            case 12: {
                int3 = struct_getparam(int1, 5452);
                int4 = struct_getparam(int1, 5472);
                int5 = struct_getparam(int1, 5467);
                break;
            }
            case 13: {
                int3 = struct_getparam(int1, 5453);
                int4 = struct_getparam(int1, 5473);
                int5 = struct_getparam(int1, 5468);
                break;
            }
            case 14: {
                int3 = struct_getparam(int1, 5454);
                int4 = struct_getparam(int1, 5474);
                int5 = struct_getparam(int1, 5469);
                break;
            }
            case 15: {
                int3 = struct_getparam(int1, 5455);
                int4 = struct_getparam(int1, 5475);
                int5 = struct_getparam(int1, 5470);
                break;
            }
            case 16: {
                int3 = struct_getparam(int1, 4347);
                int4 = struct_getparam(int1, 8906);
                int5 = struct_getparam(int1, 4367);
                break;
            }
            case 17: {
                int3 = struct_getparam(int1, 4351);
                int4 = struct_getparam(int1, 8910);
                int5 = struct_getparam(int1, 4371);
                break;
            }
            case 18: {
                int3 = struct_getparam(int1, 4363);
                int4 = struct_getparam(int1, 8917);
                int5 = struct_getparam(int1, 8284);
                break;
            }
            default: {
                int3 = -1 as obj;
                break;
            }
        };
    };
    return [int6, int9];
}