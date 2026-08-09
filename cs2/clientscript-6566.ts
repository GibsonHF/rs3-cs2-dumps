//
function script6566(): void {
    script3915();
    if (((varbitplayer_4321 == 1) || (varbitplayer_25803 == 1))) {
        script6567();
        return;
    };
    if (((varclient_1781 <= 0) || (varclient_1781 > 5))) {
        if ((IF_GETHIDE(comp(1253, 8)) == true)) {
            if (((script11747(33217) == 1) || (script11747(34277) == 1))) {
                return;
            };
            varbitplayer_4323 = 0;
            script6978();
        };
        return;
    };
    script1545();
    script9123();
    if ((varbitplayer_4323 <= 0)) {
        return;
    };
    script16198(0, 82116873);
    if ((varclient_4083 == 3)) {
        return;
    };
    varclient_4083 = 3;
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = -1 as struct;
    var int3 = -1 as seq;
    var int4 = 0;
    switch (varclient_1781) {
        case 1: {
            int0 = comp(1253, 31);
            int1 = comp(1253, 33);
            break;
        }
        case 2: {
            int0 = comp(1253, 21);
            int1 = comp(1253, 23);
            break;
        }
        case 3: {
            int0 = comp(1253, 26);
            int1 = comp(1253, 28);
            break;
        }
        case 4: {
            int0 = comp(1253, 16);
            int1 = comp(1253, 18);
            break;
        }
        case 5: {
            int0 = comp(1253, 11);
            int1 = comp(1253, 13);
            break;
        }
        default: {
            int0 = comp(1253, 31);
            int1 = comp(1253, 33);
            break;
        }
    };
    switch (varclient_4077) {
        case 1: {
            int3 = 22647 as seq;
            break;
        }
        case 2: {
            int3 = 22648 as seq;
            break;
        }
        case 3: {
            int3 = 22649 as seq;
            break;
        }
        case 4: {
            int3 = 22650 as seq;
            break;
        }
        case 5: {
            int3 = 22651 as seq;
            break;
        }
        case 6: {
            int3 = 22651 as seq;
            break;
        }
        case 7: {
            int3 = 22651 as seq;
            break;
        }
        default: {
            int3 = 22647 as seq;
            break;
        }
    };
    int4 = (300 - SEQLENGTH(int3));
    switch (varclient_1928) {
        case 6: {
            switch (varclient_1781) {
                case 1: {
                    int0 = comp(1585, 20);
                    int1 = comp(1585, 22);
                    break;
                }
                case 2: {
                    int0 = comp(1585, 29);
                    int1 = comp(1585, 31);
                    break;
                }
                case 3: {
                    int0 = comp(1585, 24);
                    int1 = comp(1585, 26);
                    break;
                }
                case 4: {
                    int0 = comp(1585, 14);
                    int1 = comp(1585, 17);
                    break;
                }
                case 5: {
                    int0 = comp(1585, 10);
                    int1 = comp(1585, 12);
                    break;
                }
                case 6: {
                    int0 = comp(1585, 6);
                    int1 = comp(1585, 33);
                    break;
                }
                default: {
                    int0 = comp(1585, 20);
                    int1 = comp(1585, 22);
                    break;
                }
            };
            break;
        }
        case 34: {
            switch (varbitplayer_42991) {
                case 1: {
                    int0 = comp(35, 27);
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42981);
                    break;
                }
                case 2: {
                    int0 = comp(35, 12);
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42982);
                    break;
                }
                case 3: {
                    int0 = comp(35, 29);
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42983);
                    break;
                }
                case 4: {
                    int0 = comp(35, 10);
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42984);
                    break;
                }
                default: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                    return;
                }
            };
            int1 = int0;
            int3 = struct_getparam(int2, 7753);
            int4 = (300 - SEQLENGTH(int3));
            break;
        }
        case 36: {
            switch (varbitplayer_43348) {
                case 1: {
                    int0 = comp(19, 2);
                    int1 = comp(19, 3);
                    break;
                }
                case 2: {
                    int0 = comp(19, 7);
                    int1 = comp(19, 8);
                    break;
                }
                case 3: {
                    int0 = comp(19, 9);
                    int1 = comp(19, 10);
                    break;
                }
                default: {
                    int0 = comp(19, 7);
                    int1 = comp(19, 8);
                    break;
                }
            };
            break;
        }
        case 54: {
            if ((varbitplayer_47441 == 1)) {
                int3 = 33402 as seq;
                int0 = comp(696, 5);
                int4 = 60;
            } else {
                int4 = 300;
            };
            break;
        }
        case 56:
        case 60: {
            int4 = 300;
            break;
        }
    };
    IF_SETMODELANIM(22645 as seq, comp(1253, 31));
    IF_SETMODELANIM(22645 as seq, comp(1253, 21));
    IF_SETMODELANIM(22645 as seq, comp(1253, 26));
    IF_SETMODELANIM(22645 as seq, comp(1253, 16));
    IF_SETMODELANIM(22645 as seq, comp(1253, 11));
    IF_SETMODELANIM(22645 as seq, comp(1585, 20));
    IF_SETMODELANIM(22645 as seq, comp(1585, 29));
    IF_SETMODELANIM(22645 as seq, comp(1585, 24));
    IF_SETMODELANIM(22645 as seq, comp(1585, 14));
    IF_SETMODELANIM(22645 as seq, comp(1585, 10));
    IF_SETMODELANIM(22645 as seq, comp(1585, 6));
    IF_SETONTIMER(callback(), comp(1253, 31));
    IF_SETONTIMER(callback(), comp(1253, 21));
    IF_SETONTIMER(callback(), comp(1253, 26));
    IF_SETONTIMER(callback(), comp(1253, 16));
    IF_SETONTIMER(callback(), comp(1253, 11));
    IF_SETONTIMER(callback(), comp(1585, 20));
    IF_SETONTIMER(callback(), comp(1585, 29));
    IF_SETONTIMER(callback(), comp(1585, 24));
    IF_SETONTIMER(callback(), comp(1585, 14));
    IF_SETONTIMER(callback(), comp(1585, 10));
    IF_SETONTIMER(callback(), comp(1585, 6));
    IF_SETONMOUSEOVER(callback(), int1);
    IF_SETONMOUSELEAVE(callback(), int1);
    IF_SETMODELANIM(int3, int0);
    var int5 = script16161();
    if ((int5 != -1)) {
        if ((struct_getparam(int5, 8676) == true)) {
            script16776(script16774(int5));
        } else {
            IF_SETONTIMER(callback(script5898, -2147483645, int4), comp(1253, 0));
        };
    } else {
        IF_SETONTIMER(callback(script5898, -2147483645, int4), comp(1253, 0));
    };
    return;
}