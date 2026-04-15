//
function script7111(int0: struct, int1: unknown_int): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int2 = struct_getparam(int0, 2655);
    var int3 = struct_getparam(int0, 2665);
    var int4 = struct_getparam(int0, 5456);
    var int5 = 0;
    var int6 = 0;
    var int7 = 1;
    while ((int2 != -1 as obj)) {
        if ((int3 != 0)) {
            int6 = script7115(-1 as obj, -1, int2, int4, int1);
            if ((int6 == -1)) {
                int5 = 2147483647;
                int7 = 2147483647;
            } else {
                int5 = MAX(int5, int6);
            };
        };
        switch (++int7) {
            case 2: {
                int2 = struct_getparam(int0, 2656);
                int3 = struct_getparam(int0, 2666);
                int4 = struct_getparam(int0, 5457);
                break;
            }
            case 3: {
                int2 = struct_getparam(int0, 2657);
                int3 = struct_getparam(int0, 2667);
                int4 = struct_getparam(int0, 5458);
                break;
            }
            case 4: {
                int2 = struct_getparam(int0, 2658);
                int3 = struct_getparam(int0, 2668);
                int4 = struct_getparam(int0, 5459);
                break;
            }
            case 5: {
                int2 = struct_getparam(int0, 2659);
                int3 = struct_getparam(int0, 2669);
                int4 = struct_getparam(int0, 5460);
                break;
            }
            case 6: {
                int2 = struct_getparam(int0, 2660);
                int3 = struct_getparam(int0, 2670);
                int4 = struct_getparam(int0, 5461);
                break;
            }
            case 7: {
                int2 = struct_getparam(int0, 2661);
                int3 = struct_getparam(int0, 2671);
                int4 = struct_getparam(int0, 5462);
                break;
            }
            case 8: {
                int2 = struct_getparam(int0, 2662);
                int3 = struct_getparam(int0, 2672);
                int4 = struct_getparam(int0, 5463);
                break;
            }
            case 9: {
                int2 = struct_getparam(int0, 2663);
                int3 = struct_getparam(int0, 2673);
                int4 = struct_getparam(int0, 5464);
                break;
            }
            case 10: {
                int2 = struct_getparam(int0, 2664);
                int3 = struct_getparam(int0, 2674);
                int4 = struct_getparam(int0, 5465);
                break;
            }
            case 11: {
                int2 = struct_getparam(int0, 5451);
                int3 = struct_getparam(int0, 5471);
                int4 = struct_getparam(int0, 5466);
                break;
            }
            case 12: {
                int2 = struct_getparam(int0, 5452);
                int3 = struct_getparam(int0, 5472);
                int4 = struct_getparam(int0, 5467);
                break;
            }
            case 13: {
                int2 = struct_getparam(int0, 5453);
                int3 = struct_getparam(int0, 5473);
                int4 = struct_getparam(int0, 5468);
                break;
            }
            case 14: {
                int2 = struct_getparam(int0, 5454);
                int3 = struct_getparam(int0, 5474);
                int4 = struct_getparam(int0, 5469);
                break;
            }
            case 15: {
                int2 = struct_getparam(int0, 5455);
                int3 = struct_getparam(int0, 5475);
                int4 = struct_getparam(int0, 5470);
                break;
            }
            case 16: {
                int2 = struct_getparam(int0, 4347);
                int3 = struct_getparam(int0, 8906);
                int4 = struct_getparam(int0, 4367);
                break;
            }
            case 17: {
                int2 = struct_getparam(int0, 4351);
                int3 = struct_getparam(int0, 8910);
                int4 = struct_getparam(int0, 4371);
                break;
            }
            case 18: {
                int2 = struct_getparam(int0, 4363);
                int3 = struct_getparam(int0, 8917);
                int4 = struct_getparam(int0, 8284);
                break;
            }
            default: {
                int2 = -1 as obj;
                break;
            }
        };
    };
    return int5;
}