//
function script6457(int0: struct): void {
    var int1 = -1 as struct;
    var int2 = comp(-1, 65535);
    var int3 = (ENUM_GETOUTPUTCOUNT(5962 as cs2enum) - 1);
    while ((int3 >= 0)) {
        int2 = enum_getvalue(0, 9, 5962 as cs2enum, int3);
        if ((int2 != comp(-1, 65535))) {
            CC_DELETEALL(int2);
            switch (int3) {
                case 0: {
                    int1 = struct_getparam(int0, 2483);
                    break;
                }
                case 1: {
                    int1 = struct_getparam(int0, 2484);
                    break;
                }
                case 2: {
                    int1 = struct_getparam(int0, 2485);
                    break;
                }
                case 3: {
                    int1 = struct_getparam(int0, 2486);
                    break;
                }
                case 4: {
                    int1 = struct_getparam(int0, 2487);
                    break;
                }
                case 5: {
                    int1 = struct_getparam(int0, 2488);
                    break;
                }
                case 6: {
                    int1 = struct_getparam(int0, 2489);
                    break;
                }
                case 7: {
                    int1 = struct_getparam(int0, 2490);
                    break;
                }
                case 8: {
                    int1 = struct_getparam(int0, 2491);
                    break;
                }
                case 9: {
                    int1 = struct_getparam(int0, 2492);
                    break;
                }
                case 10: {
                    int1 = struct_getparam(int0, 2493);
                    break;
                }
                case 11: {
                    int1 = struct_getparam(int0, 2494);
                    break;
                }
                case 12: {
                    int1 = struct_getparam(int0, 2495);
                    break;
                }
                case 13: {
                    int1 = struct_getparam(int0, 2496);
                    break;
                }
                case 14: {
                    int1 = struct_getparam(int0, 2497);
                    break;
                }
                case 15: {
                    int1 = struct_getparam(int0, 2498);
                    break;
                }
                case 16: {
                    int1 = struct_getparam(int0, 9060);
                    break;
                }
            };
            if ((int1 != -1 as struct)) {
                script1133(int2, int3, int1);
                int1 = -1 as struct;
            };
            int2 = comp(-1, 65535);
        };
        int3 = (int3 - 1);
    };
    return;
}