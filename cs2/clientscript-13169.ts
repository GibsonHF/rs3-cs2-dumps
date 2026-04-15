//
function script13169(int0: component, int1: int): unknown_int {
    if ((varclient_5938 != script441(1))) {
        script13230();
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = -1;
    switch (int1) {
        case 0: {
            int2 = SETBIT(0, 2);
            int4 = SETBIT(0, 20);
            if ((varbitclient_35136 == 0)) {
                int10 = script13250();
                int11 = 12858;
            } else {
                int10 = AND(varclient_5934, script13250());
                int11 = AND(varclient_5935, 12858);
            };
            int13 = 1;
            script10444();
            break;
        }
        case 1: {
            int2 = SETBIT(0, 2);
            int4 = SETBIT(0, 19);
            int9 = 268435454;
            int10 = 10;
            int11 = 12858;
            int13 = 0;
            script10444();
            break;
        }
        case 2: {
            int12 = enum_getreversecount(0, 12198 as cs2enum, varbitclient_35135);
            if ((int12 > 0)) {
                int12 = enum_getreverseindex(0, 0, 12198 as cs2enum, varbitclient_35135, 0);
            } else {
                int12 = 0;
                varbitclient_35135 = enum_getvalue(0, 0, 12198 as cs2enum, 0);
            };
            script13166(2);
            int2 = SETBIT(0, 2);
            int4 = AND(SETBIT(0, varbitclient_35135), 280255);
            if ((TESTBIT(int4, 3) == 1)) {
                int9 = 262142;
            } else if ((TESTBIT(int4, 5) == 1)) {
                int9 = 268173312;
            } else {
                int9 = 0;
            };
            if ((varbitclient_35136 == 0)) {
                int10 = script13250();
                int11 = 12858;
            } else {
                int10 = AND(varclient_5934, script13250());
                int11 = AND(varclient_5935, 12858);
            };
            int13 = 1;
            if ((int0 != comp(-1, 65535))) {
                script10435(int0, -1, -1, -1, 12198 as cs2enum, -1 as cs2enum, (ENUM_GETOUTPUTCOUNT(12198 as cs2enum) - 1), int12, 0, 0);
            };
            break;
        }
        case 3: {
            if ((script8292(1, -1) == 0)) {
                return 0;
            };
            switch (varclient_5938) {
                case 1: {
                    int2 = AND(varclient_5926, 62);
                    if ((TESTBIT(int2, 1) == 1)) {
                        int3 = AND(varclient_5927, 62);
                    } else {
                        int3 = 0;
                    };
                    if ((TESTBIT(int2, 2) == 1)) {
                        int4 = AND(varclient_5928, 1328831);
                    } else {
                        int4 = 0;
                    };
                    if ((TESTBIT(int2, 3) == 1)) {
                        int5 = AND(varclient_5929, 31);
                    } else {
                        int5 = 0;
                    };
                    if ((TESTBIT(int2, 4) == 1)) {
                        int6 = AND(varclient_5930, 243);
                    } else {
                        int6 = 0;
                    };
                    if ((TESTBIT(int2, 5) == 1)) {
                        int7 = AND(varclient_5931, 62);
                    } else {
                        int7 = 0;
                    };
                    if ((TESTBIT(int2, 6) == 1)) {
                        int8 = AND(varclient_5932, 0);
                    } else {
                        int8 = 0;
                    };
                    if ((TESTBIT(int4, 3) == 1)) {
                        if ((TESTBIT(int4, 5) == 1)) {
                            int9 = AND(varclient_5933, 268435454);
                        } else {
                            int9 = AND(varclient_5933, 262142);
                        };
                    } else if ((TESTBIT(int4, 5) == 1)) {
                        int9 = AND(varclient_5933, 268173312);
                    } else {
                        int9 = 0;
                    };
                    break;
                }
                case 2: {
                    int2 = SETBIT(0, 2);
                    if ((TESTBIT(int2, 2) == 1)) {
                        int4 = AND(varclient_5928, 1328831);
                    } else {
                        int4 = 0;
                    };
                    if ((TESTBIT(int4, 3) == 1)) {
                        if ((TESTBIT(int4, 5) == 1)) {
                            int9 = AND(varclient_5933, 268435454);
                        } else {
                            int9 = AND(varclient_5933, 262142);
                        };
                    } else if ((TESTBIT(int4, 5) == 1)) {
                        int9 = AND(varclient_5933, 268173312);
                    } else {
                        int9 = 0;
                    };
                    break;
                }
                case 3: {
                    int2 = SETBIT(0, 4);
                    if ((TESTBIT(int2, 4) == 1)) {
                        int6 = AND(varclient_5930, 243);
                    } else {
                        int6 = 0;
                    };
                    break;
                }
                case 4: {
                    int2 = SETBIT(0, 1);
                    if ((TESTBIT(int2, 1) == 1)) {
                        int3 = AND(varclient_5927, 62);
                    } else {
                        int3 = 0;
                    };
                    break;
                }
                case 5: {
                    int2 = SETBIT(0, 3);
                    if ((TESTBIT(int2, 3) == 1)) {
                        int5 = AND(varclient_5929, 31);
                    } else {
                        int5 = 0;
                    };
                    break;
                }
                case 6: {
                    int2 = SETBIT(0, 5);
                    if ((TESTBIT(int2, 5) == 1)) {
                        int7 = AND(varclient_5931, 62);
                    } else {
                        int7 = 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            if ((varbitclient_35136 == 0)) {
                int10 = script13250();
                int11 = 12858;
            } else {
                int10 = AND(varclient_5934, script13250());
                int11 = AND(varclient_5935, 12858);
            };
            int13 = 1;
            if ((int0 != comp(-1, 65535))) {
                script10435(int0, -1, -1, -1, 12197 as cs2enum, -1 as cs2enum, (ENUM_GETOUTPUTCOUNT(12197 as cs2enum) - 1), -1, 0, 0);
            };
            break;
        }
        case 4: {
            if ((IF_FIND(comp(1843, 183)) == 1)) {
                int2 = cc_getparam(6362);
                int3 = cc_getparam(6364);
                int4 = cc_getparam(6365);
                int5 = cc_getparam(6366);
                int6 = cc_getparam(6367);
                int7 = cc_getparam(6368);
                int8 = cc_getparam(6369);
                int9 = cc_getparam(6370);
            };
            int10 = AND(varclient_5934, script13250());
            int11 = AND(varclient_5935, 12858);
            if (((AND(int10, script13250()) == script13250()) && (AND(int11, 12858) == 12858))) {
                varbitclient_35136 = 0;
            } else {
                varbitclient_35136 = 1;
            };
            if ((int0 != comp(-1, 65535))) {
                script10435(int0, -1, -1, -1, 12199 as cs2enum, -1 as cs2enum, (ENUM_GETOUTPUTCOUNT(12199 as cs2enum) - 1), -1, 0, 0);
            };
            break;
        }
        case 5: {
            if ((varbitclient_35134 != 1)) {
                varbitclient_35134 = 1;
                script13163();
                if ((IF_FIND(comp(1843, 183)) == 1)) {
                    script13171(CC_GETSCROLLHEIGHT(), 1);
                };
                script13176();
            };
            return 1;
        }
        case 6: {
            if ((varbitclient_35134 != 0)) {
                varbitclient_35134 = 0;
                script13163();
                if ((IF_FIND(comp(1843, 261)) == 1)) {
                    script13172(CC_GETSCROLLWIDTH(), 1);
                };
                script13177();
            };
            return 1;
        }
        default: {
            return 0;
        }
    };
    var int14 = script13164(int1);
    script13161(int14);
    var int15 = -1 as struct;
    int15 = enum_getvalue(0, 73, 12222 as cs2enum, script13164(4));
    if ((int15 == -1 as struct)) {
        script13230();
        return 0;
    };
    if ((varbitclient_35136 == 0)) {
        IF_SETHIDE(true, struct_getparam(int15, 4040));
    } else {
        IF_SETHIDE(false, struct_getparam(int15, 4040));
    };
    if ((int13 == 1)) {
        IF_SETHIDE(true, struct_getparam(int15, 6225));
    } else if ((int13 == 0)) {
        IF_SETHIDE(false, struct_getparam(int15, 6225));
    };
    var int16 = script13162();
    var int17 = -1;
    if ((int14 <= int16)) {
        while ((++int17 <= int16)) {
            int15 = enum_getvalue(0, 73, 12222 as cs2enum, int17);
            if ((int15 != -1 as struct)) {
                if ((int14 == int17)) {
                    IF_SETHIDE(false, struct_getparam(int15, 4040));
                } else {
                    IF_SETHIDE(true, struct_getparam(int15, 4040));
                };
            };
        };
    };
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        script13170(cc_getparam(5441), int2, int3, int4, int5, int6, int7, int8, int9, int10, int11);
    };
    if ((((int14 >= 0) && (int14 <= int16)) && (IF_FIND(comp(1843, 0)) == 1))) {
        CC_SETONTIMER(callback());
    };
    return 1;
}