//[clientscript,loginscreen_keypress]
function script1221(int0: int, int1: unknown_int): void {
    if (((varclient_174 == 108) || (varclient_6886 == 1))) {
        script15660();
        return;
    };
    var int2 = script2948();
    var string0 = " ";
    var string1 = "";
    if ((script13749() == true)) {
        switch (int0) {
            case 13: {
                script15660();
                break;
            }
        };
    };
    switch (varclient_174) {
        case 100: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            switch (int0) {
                case 13: {
                    if ((script13749() == false)) {
                        script1174(3);
                    };
                    return;
                }
                case 84:
                case 80: {
                    if ((varclient_175 >= CLIENTCLOCK())) {
                        return;
                    };
                    script15651(101);
                    script315();
                    varclient_175 = CLIENTCLOCK();
                    varclient_1099 = STRING_LENGTH(script2949(varclient_2577));
                    script3237(comp(744, 128), comp(744, 129), comp(744, 130), script2949(varclient_2577), 101, 212 as fontmetrics);
                    return;
                }
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103: {
                    varclient_1099 = script1553(int0, varclient_1099, varclient_2576);
                    script3237(comp(744, 105), comp(744, 106), comp(744, 107), varclient_2576, 100, 212 as fontmetrics);
                    return;
                }
            };
            if (((((STRING_LENGTH(varclient_2576) >= 320) && (int0 != 85)) && (int0 != 101)) || (STRING_LENGTH(REMOVETAGS(APPEND_CHAR("", int1))) == 0))) {
                return;
            };
            [varclient_2576, varclient_1099] = script802(varclient_1099, varclient_2576, 0, int0, int1);
            script15698(100);
            return;
        }
        case 101: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            switch (int0) {
                case 13: {
                    if ((script13749() == false)) {
                        script1174(3);
                    };
                    return;
                }
                case 84:
                case 80: {
                    if ((varclient_175 >= CLIENTCLOCK())) {
                        return;
                    };
                    if (((int0 == 84) && (STRING_LENGTH(varclient_2576) > 0))) {
                        script2945();
                        return;
                    };
                    script15651(100);
                    varclient_175 = CLIENTCLOCK();
                    varclient_1099 = STRING_LENGTH(varclient_2576);
                    script3237(comp(744, 105), comp(744, 106), comp(744, 107), varclient_2576, 100, 212 as fontmetrics);
                    return;
                }
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103: {
                    varclient_1099 = script1553(int0, varclient_1099, script2949(varclient_2577));
                    script3237(comp(744, 128), comp(744, 129), comp(744, 130), script2949(varclient_2577), 101, 212 as fontmetrics);
                    return;
                }
            };
            if ((((STRING_LENGTH(varclient_2577) >= 20) && (int0 != 85)) && (int0 != 101))) {
                return;
            };
            [varclient_2577, varclient_1099] = script802(varclient_1099, varclient_2577, 0, int0, int1);
            script15699();
            return;
        }
        case 114: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            switch (int0) {
                case 84: {
                    if ((varclient_175 >= CLIENTCLOCK())) {
                        return;
                    };
                    if ((STRING_LENGTH(varclient_4192) > 0)) {
                        script9824();
                        return;
                    };
                    script15651(114);
                    varclient_175 = CLIENTCLOCK();
                    varclient_1099 = STRING_LENGTH(varclient_4192);
                    return;
                }
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103: {
                    varclient_1099 = script1553(int0, varclient_1099, varclient_4192);
                    script3237(comp(744, 159), comp(744, 160), comp(744, 161), varclient_4192, 114, 212 as fontmetrics);
                    return;
                }
                case 13: {
                    script15705();
                    return;
                }
            };
            if ((((STRING_LENGTH(varclient_4192) >= 6) && (int0 != 85)) && (int0 != 101))) {
                return;
            };
            [varclient_4192, varclient_1099] = script802(varclient_1099, varclient_4192, 1, int0, int1);
            IF_SETTEXT(varclient_4192, comp(744, 160));
            script3237(comp(744, 159), comp(744, 160), comp(744, 161), varclient_4192, 114, 212 as fontmetrics);
            script15700();
            return;
        }
        case 15:
        case 113: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            switch (int0) {
                case 13: {
                    script1174(8);
                    varclient_6896 = "";
                    script15698(113);
                    return;
                }
                case 84:
                case 80: {
                    if ((varclient_175 >= CLIENTCLOCK())) {
                        return;
                    };
                    varclient_175 = CLIENTCLOCK();
                    if ((STRING_LENGTH(varclient_6896) > 0)) {
                        script7722(1);
                    };
                    return;
                }
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103: {
                    varclient_1099 = script1553(int0, varclient_1099, varclient_6896);
                    script3237(comp(744, 326), comp(744, 327), comp(744, 328), varclient_6896, 113, 212 as fontmetrics);
                    return;
                }
            };
            if (((((STRING_LENGTH(varclient_2576) >= 320) && (int0 != 85)) && (int0 != 101)) || (STRING_LENGTH(REMOVETAGS(APPEND_CHAR("", int1))) == 0))) {
                return;
            };
            [varclient_6896, varclient_1099] = script802(varclient_1099, varclient_6896, 0, int0, int1);
            script15698(113);
            return;
        }
        case 102: {
            switch (int2) {
                case -3:
                case 1: {
                    return;
                }
            };
            if ((int0 == 13)) {
                if ((int2 == 21)) {
                    script3235();
                    return;
                };
                script2954(1);
                return;
            };
            break;
        }
        case 103:
        case 109:
        case 104:
        case 105: {
            script3216(int0, int1);
            return;
        }
        case 18: {
            if ((int0 == 13)) {
                if ((IF_GETHIDE(comp(744, 289)) == true)) {
                    script3131();
                } else if ((IF_GETHIDE(comp(744, 289)) == false)) {
                    script2465();
                } else {
                    script3133(0);
                };
                return;
            };
            break;
        }
        case 3: {
            if ((int0 == 13)) {
                script4142(-1);
                return;
            };
            break;
        }
        case 4: {
            if ((int0 == 13)) {
                script1174(3);
                return;
            };
            break;
        }
        case 12: {
            if ((int0 == 13)) {
                script12351();
                return;
            };
            break;
        }
        case 14: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            if ((int0 == 13)) {
                script15705();
                return;
            };
            break;
        }
        case 19: {
            switch (int2) {
                case -3:
                case 21:
                case 1: {
                    return;
                }
            };
            if ((int0 == 13)) {
                script2007();
                return;
            };
            break;
        }
        case 20: {
            if ((int0 == 13)) {
                script19992();
                return;
            };
            break;
        }
    };
    return;
}