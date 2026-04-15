//[clientscript,chat_op]
function script86(int0: int, int1: unknown_int, int2: int): void {
    var int3 = -1;
    var int4 = script8552(int0);
    if ((CC_FIND(int4, int2) == 1)) {
        int3 = cc_getparam(3443);
    } else {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int7 = -1 as chatphrase;
    var string5 = "";
    var int8 = -1;
    var int9 = -1;
    stack(unk11059(int3));
    [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
    if ((int5 == -1)) {
        return;
    };
    switch (int1) {
        case 1: {
            unk11099(4, string3);
            break;
        }
        case 2: {
            if ((int5 == 132)) {
                unk11099(5, string3);
            } else {
                unk11099(1, string3);
            };
            break;
        }
        case 3: {
            unk11099(7, string3);
            break;
        }
        case 4: {
            switch (int5) {
                case 135: {
                    script822();
                    break;
                }
                case 115:
                case 127:
                case 125:
                case 136:
                case 145: {
                    script15232(1, int6);
                    break;
                }
                case 140:
                case 143: {
                    IF_TRIGGEROP(comp(1477, 1), int6, 1);
                    break;
                }
                case 141: {
                    IF_TRIGGEROP(comp(1477, 1), 5, 1);
                    break;
                }
                case 146: {
                    IF_TRIGGEROP(comp(1477, 2), int6, 1);
                    break;
                }
            };
            break;
        }
        case 6: {
            if ((script11370() == 0)) {
                printmessage("You cannot add a friend until you have entered your date of birth");
                return;
            };
            if ((FRIEND_TEST(string3) == 1)) {
                if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
                    if (((script6431() == true) && (varbitclient_41275 != 1))) {
                        varbitclient_41275 = 1;
                        script9292();
                    };
                    script8512(int0, string3);
                    return;
                };
            } else {
                FRIEND_ADD(string3);
            };
            break;
        }
        case 7: {
            IGNORE_ADD(string3);
            break;
        }
        case 8: {
            varclient_2578 = string3;
            break;
        }
        case 9: {
            switch (int5) {
                case 17: {
                    script1052(4, string3, int7, int0);
                    break;
                }
                case 18: {
                    script1052(5, string3, int7, int0);
                    break;
                }
                case 20: {
                    script1052(6, string3, int7, int0);
                    break;
                }
                case 42: {
                    switch (int9) {
                        case 0: {
                            script1052(9, string3, int7, int0);
                            break;
                        }
                        case 1: {
                            script1052(18, string3, int7, int0);
                            break;
                        }
                        default: {
                            script12478("Missing plug-in");
                            break;
                        }
                    };
                    break;
                }
                case 45: {
                    script1052(11, string3, int7, int0);
                    break;
                }
                case 25: {
                    script1052(14, string3, int7, int0);
                    break;
                }
                case 23: {
                    script1052(16, string3, int7, int0);
                    break;
                }
                case 2:
                case 1: {
                    unk11099(10, string3);
                    break;
                }
            };
            break;
        }
        case 10: {
            switch (int5) {
                case 41:
                case 42: {
                    if ((int9 == 0)) {
                        script4465(string3);
                    };
                    break;
                }
                case 9:
                case 20: {
                    script1633(string3);
                    break;
                }
                case 24:
                case 25:
                case 22:
                case 23: {
                    break;
                }
                default: {
                    unk11099(5, string3);
                    break;
                }
            };
            break;
        }
    };
    return;
}