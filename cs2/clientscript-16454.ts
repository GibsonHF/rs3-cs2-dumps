//
function script16454(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    stack(700416);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return;
    };
    if ((dbrow_getfield(int2, 700416, 0) <= 0)) {
        return;
    };
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 1;
    [int3, int4] = dbrow_getfield(int2, 700464, 0);
    if ((int3 != -1 as struct)) {
        int5 = DB_GETFIELDCOUNT(int2, 700464);
    };
    var int6 = 200;
    var int7 = 0;
    var int8 = -1;
    if ((script6431() == true)) {
        int6 = 300;
    };
    var int9 = int5;
    int6 = (int6 + (5 * (int9 - 1)));
    var int10 = dbrow_getfield(int2, 700448, 0);
    var int11 = 0;
    var string0 = "";
    var int12 = 0;
    var string1 = dbrow_getfield(int2, 700432, 0);
    var int13 = -1;
    var string2 = "";
    var string3 = "";
    var int14 = -1 as obj;
    var int15 = -1 as obj;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    int8 = -1;
    while ((++int8 < int5)) {
        [int3, int4] = dbrow_getfield(int2, 700464, int8);
        if ((int8 == 0)) {
            if (((int3 != -1 as struct) && (struct_getparam(int3, 2190) == 1))) {
                int12 = 1;
            };
            if ((int10 != -1 as struct)) {
                [int11, string0, int13] = script16461(int10, int12);
            };
            int7 = script14747(int0, 0, int7, (int6 * int9), string1, int13, 0);
            int7 = script14748(int0, 0, int7);
            if ((STRING_LENGTH(string0) > 0)) {
                int7 = script16462(int0, 0, int7, (int6 * int9), int11, string0);
                int7 = script14748(int0, 0, int7);
            };
            int17 = int7;
            int18 = int7;
        } else if ((int8 > 0)) {
            if ((int8 < int9)) {
                int7 = int17;
                int16 = (int16 + int6);
                int16 = script16463(int0, int16, int7);
            } else {
                int7 = script14748(int0, int16, int7);
            };
        };
        int11 = 1;
        string0 = "";
        int13 = -1;
        int15 = -1 as obj;
        switch (int4) {
            case 1: {
                int14 = 52868 as obj;
                string2 = "Net";
                break;
            }
            case 2: {
                int14 = 52869 as obj;
                string2 = "Net";
                break;
            }
            case 4:
            case 5: {
                int14 = 309 as obj;
                string2 = "Lure";
                break;
            }
            case 3: {
                switch (int1) {
                    case 9: {
                        int14 = 1585 as obj;
                        break;
                    }
                    case 8: {
                        int14 = 11323 as obj;
                        break;
                    }
                    case 37: {
                        int14 = 3157 as obj;
                        break;
                    }
                    default: {
                        int14 = 307 as obj;
                        break;
                    }
                };
                string2 = "Bait";
                break;
            }
            case 6: {
                int14 = 311 as obj;
                string2 = "Harpoon";
                break;
            }
            case 7: {
                int14 = 13431 as obj;
                string2 = "Cage";
                break;
            }
            case 8: {
                int14 = 301 as obj;
                string2 = "Cage";
                break;
            }
            default: {
                if (((int3 != -1 as struct) && (struct_getparam(int3, 1998) == 24932 as seq))) {
                    int14 = 52869 as obj;
                    string2 = "Net";
                } else {
                    switch (int1) {
                        case 25: {
                            int14 = 52869 as obj;
                            string2 = "Net";
                            break;
                        }
                        case 36: {
                            int14 = 311 as obj;
                            string2 = "Harpoon/Cage";
                            break;
                        }
                        default: {
                            int14 = 307 as obj;
                            string2 = "Catch";
                            break;
                        }
                    };
                };
                break;
            }
        };
        if ((int3 != -1 as struct)) {
            int15 = struct_getparam(int3, 2004);
            if (((int15 == -1 as obj) && (int4 == 3))) {
                int15 = 313 as obj;
            };
            switch (int1) {
                case 37: {
                    int15 = 3150 as obj;
                    break;
                }
                case 24: {
                    switch (int3) {
                        case 39515: {
                            int15 = 42238 as obj;
                            break;
                        }
                        case 39517: {
                            int15 = 42240 as obj;
                            break;
                        }
                        case 39516: {
                            int15 = 42239 as obj;
                            break;
                        }
                    };
                    break;
                }
            };
        };
        if ((int15 != -1 as obj)) {
            string3 = OC_NAME(int15);
            if ((STRING_LENGTH(string3) < 16)) {
                string2 = strconcat(string2, "<br>(");
            } else {
                string2 = strconcat(string2, " (");
            };
            string2 = strconcat(string2, string3);
            string2 = strconcat(string2, ")");
        };
        int7 = script16460(int0, int16, int7, int6, int14, string2, int15, int13);
        if ((STRING_LENGTH(string0) > 0)) {
            int7 = script16462(int0, int16, int7, int6, int11, string0);
            int7 = script14748(int0, int16, int7);
        };
        int7 = script16456(int0, int16, int7, int6, int3, int1);
        if ((int7 > int18)) {
            int18 = int7;
        };
    };
    IF_SETSIZE((int6 * int9), (int18 - 2), 0, 0, int0);
    return;
}