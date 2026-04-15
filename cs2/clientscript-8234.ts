//
function script8234(int0: struct, int1: inv, int2: int, int3: int, int4: int): [obj, int] {
    var int5 = 0;
    var int6 = -1 as obj;
    if ((int4 < 0)) {
        int5 = int2;
        var int2 = int3;
        var int3 = int5;
    };
    int3 = (int3 + int4);
    while ((int2 != int3)) {
        switch (int2) {
            case 0: {
                int6 = struct_getparam(int0, 2981);
                break;
            }
            case 1: {
                int6 = struct_getparam(int0, 2982);
                break;
            }
            case 2: {
                int6 = struct_getparam(int0, 2983);
                break;
            }
            case 3: {
                int6 = struct_getparam(int0, 2984);
                break;
            }
            case 4: {
                int6 = struct_getparam(int0, 532);
                break;
            }
            case 5: {
                int6 = struct_getparam(int0, 533);
                break;
            }
            case 6: {
                int6 = struct_getparam(int0, 534);
                break;
            }
            case 7: {
                int6 = struct_getparam(int0, 535);
                break;
            }
            case 8: {
                int6 = struct_getparam(int0, 588);
                break;
            }
            case 9: {
                int6 = struct_getparam(int0, 589);
                break;
            }
            case 10: {
                int6 = struct_getparam(int0, 590);
                break;
            }
            case 11: {
                int6 = struct_getparam(int0, 591);
                break;
            }
            case 12: {
                int6 = struct_getparam(int0, 2241);
                break;
            }
            case 13: {
                int6 = struct_getparam(int0, 2242);
                break;
            }
            case 14: {
                int6 = struct_getparam(int0, 2243);
                break;
            }
            case 15: {
                int6 = struct_getparam(int0, 2244);
                break;
            }
            case 16: {
                int6 = struct_getparam(int0, 2245);
                break;
            }
            case 17: {
                int6 = struct_getparam(int0, 2246);
                break;
            }
        };
        int2 = (int2 + int4);
        if ((int6 != -1 as obj)) {
            int5 = script12517(int1, int6, 0);
            if ((int5 != -1)) {
                return [int6, int5];
            };
        };
    };
    return [-1 as obj, -1];
}