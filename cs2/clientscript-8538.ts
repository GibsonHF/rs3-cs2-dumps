//
function script8538(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, string0: string): void {
    var int5 = -1;
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(12984 as cs2enum);
    var int8 = -1;
    if ((varbitplayer_27169 == 0)) {
        while ((int6 < int7)) {
            int8 = enum_getvalue(0, 0, 12984 as cs2enum, int6);
            if (((script8507(int8, int1, 0, int4) == 1) && (script8508(int8, int1, int2, string0, int3, int4) == 1))) {
                if ((IF_GETHIDE(struct_getparam(script10405(int8), 3503)) == false)) {
                    return;
                };
                if ((int5 == -1)) {
                    int5 = int8;
                };
            };
            int6 = (int6 + 1);
        };
    } else if (((script8507(18, int1, 1, int4) == 1) || (int1 == 1))) {
        if ((int1 == 1)) {
            if (((varbitplayer_22846 != 2) && (varbitplayer_22846 != 0))) {
                int5 = 18;
            } else {
                return;
            };
        } else if (((varbitplayer_22846 != 0) && (script9918(int1) == 1))) {
            int5 = 18;
        } else {
            return;
        };
    };
    var int9 = -1;
    var int10 = -1;
    switch (int5) {
        case 18: {
            if ((varclient_44 > 0)) {
                return;
            };
            if ((varbitplayer_27169 == 0)) {
                varclient_44 = 100;
            } else {
                switch (script9919(int1, int4)) {
                    case 0: {
                        varclient_44 = 225;
                        break;
                    }
                    case 1: {
                        varclient_45 = 225;
                        break;
                    }
                    case 2: {
                        varclient_46 = 225;
                        break;
                    }
                    case 3: {
                        varclient_1511 = 225;
                        break;
                    }
                    case 4: {
                        varclient_47 = 225;
                        break;
                    }
                    case 5: {
                        varclient_4493 = 225;
                        break;
                    }
                    case 6: {
                        varclient_48 = 225;
                        break;
                    }
                    case 15: {
                        varclient_4509 = 225;
                        break;
                    }
                    case 16: {
                        varclient_8180 = 225;
                        break;
                    }
                };
            };
            int9 = 18;
            int10 = 8;
            break;
        }
        case 19: {
            if ((varclient_46 > 0)) {
                return;
            };
            varclient_46 = 100;
            int9 = 19;
            int10 = 9;
            break;
        }
        case 20: {
            if ((varclient_1511 > 0)) {
                return;
            };
            varclient_1511 = 100;
            int9 = 20;
            int10 = 10;
            break;
        }
        case 21: {
            if ((varclient_47 > 0)) {
                return;
            };
            varclient_47 = 100;
            int9 = 21;
            int10 = 11;
            break;
        }
        case 22: {
            if ((varclient_45 > 0)) {
                return;
            };
            varclient_45 = 100;
            int9 = 22;
            int10 = 12;
            break;
        }
        case 23: {
            if ((varclient_45 > 0)) {
                return;
            };
            varclient_45 = 100;
            int9 = 23;
            int10 = 8;
            break;
        }
        case 24: {
            if ((varclient_4303 > 0)) {
                return;
            };
            varclient_4303 = 100;
            int9 = 24;
            int10 = 8;
            break;
        }
        case 25: {
            if ((varclient_4509 > 0)) {
                return;
            };
            varclient_4509 = 100;
            int9 = 25;
            int10 = 8;
            break;
        }
        case 46: {
            if ((varclient_8180 > 0)) {
                return;
            };
            varclient_8180 = 100;
            int9 = 46;
            int10 = 8;
            break;
        }
        default: {
            return;
        }
    };
    if ((varbitplayer_27169 == 0)) {
        script8057(int9, -1 as obj, int10);
    };
    IF_SETONTIMER(callback(script8539), comp(1477, 7));
    return;
}