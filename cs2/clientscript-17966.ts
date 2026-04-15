//
function script17966(int0: dbrow, int1: int, int2: int, int3: int, int4: int): int {
    script17927();
    var int5 = -1 as obj;
    var int6 = -1 as struct;
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as graphic;
    [int5, int6, int7, int8, int9, int10] = script17884(int0);
    if ((int4 > 0)) {
        int8 = int4;
    };
    script17927();
    if (((int5 == -1 as obj) || (int5 == 50494 as obj))) {
        switch (int9) {
            case 3: {
                script17927();
                int10 = 9856 as graphic;
                break;
            }
            case 1: {
                if ((int6 != -1 as struct)) {
                    switch (struct_getparam(int6, 2531)) {
                        case 2: {
                            switch (struct_getparam(int6, 2532)) {
                                case 3:
                                case 5: {
                                    int10 = 11714 as graphic;
                                    break;
                                }
                                default: {
                                    int10 = 8618 as graphic;
                                    break;
                                }
                            };
                            break;
                        }
                        case 5: {
                            int10 = 8720 as graphic;
                            break;
                        }
                        case 4: {
                            switch (struct_getparam(int6, 2532)) {
                                case 7: {
                                    int10 = 10096 as graphic;
                                    break;
                                }
                                case 4: {
                                    int10 = 10100 as graphic;
                                    break;
                                }
                                case 0: {
                                    int10 = 10110 as graphic;
                                    break;
                                }
                            };
                            break;
                        }
                        case 3: {
                            int10 = 8680 as graphic;
                            break;
                        }
                        default: {
                            script12478(`Missing icon for ${struct_getparam(int6, 2533)}`);
                            break;
                        }
                    };
                };
                break;
            }
            case 5: {
                switch (MAP_LANG()) {
                    case 0: {
                        int10 = 12009 as graphic;
                        break;
                    }
                    case 1: {
                        int10 = 11755 as graphic;
                        break;
                    }
                    case 2: {
                        int10 = 12009 as graphic;
                        break;
                    }
                    case 3: {
                        int10 = 12394 as graphic;
                        break;
                    }
                };
                break;
            }
        };
    };
    if ((int5 == 55781 as obj)) {
        int10 = 8771 as graphic;
    };
    script17927();
    var int11 = 0;
    var int12 = 0;
    var int13 = (int3 - 8);
    if (((int5 != -1 as obj) && (int10 == -1 as graphic))) {
        script17950(int1, int2, 0, 0, 1, 1, int13, int13, 0, 0, int5, int8);
        var int2 = (int2 + 1);
    } else if ((int10 != -1 as graphic)) {
        script7918(int1, int2, 0, 0, 1, 1, int13, int13, 0, 0, int10);
        int2 = (int2 + 1);
    } else {
        script12478("Unspecified reward drawing.");
    };
    if ((int8 > 1)) {
        var [int1, int2] = script17967(int1, int2, int8);
    };
    var string0 = "";
    if (((script4148() == true) && (script17885(int0) == 1))) {
        string0 = `${TEXT_GENDER("As you're an ", "Ironman", "Ironwoman")}, this reward has been adjusted for you`;
        script17948(int1, int2, 5, 5, 2, 0, 20, 20, 0, 0, 8909 as graphic, string0, 0);
        int2 = (int2 + 1);
    };
    return int2;
}