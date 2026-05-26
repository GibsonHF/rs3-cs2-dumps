//
function script6184(): void {
    if ((varplayer_3390 > script4186())) {
        IF_SETTEXT("No Ship", 60031300);
        IF_SETTEXT("0", 60031306);
        IF_SETTEXT("0", 60031307);
        IF_SETTEXT("0", 60031308);
        IF_SETTEXT("0", 60031309);
        IF_SETTEXT(inttostring(varplayer_3390, 10), 60031299);
        IF_SETHIDE(1, 60031080);
        IF_SETHIDE(1, 60031071);
        IF_SETHIDE(1, 60031074);
        IF_SETHIDE(1, 60031077);
        IF_SETHIDE(1, 60031068);
        IF_SETHIDE(1, 60031154);
        IF_SETHIDE(1, 60031122);
        script13971(60031298, -1, 28554, "Edit Crew", 1);
        IF_SETHIDE(1, 60031062);
        IF_SETHIDE(1, 60031016);
        IF_SETHIDE(1, 60031009);
        IF_SETHIDE(1, 60031062);
        return;
    };
    IF_SETTEXT(varclient_2601, 60031300);
    var string0 = inttostring(varclient_2603, 10);
    IF_SETTEXT(string0, 60031306);
    var string1 = inttostring(varclient_2607, 10);
    IF_SETTEXT(string1, 60031307);
    var string2 = inttostring(varclient_2605, 10);
    IF_SETTEXT(string2, 60031308);
    var string3 = inttostring(varclient_2609, 10);
    IF_SETTEXT(string3, 60031309);
    var string4 = "";
    string4 = struct_getparam(enum_getvalue(0, 73, 1010 as cs2enum, script1161(varplayer_3390, 1)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1010 as cs2enum, script1161(varplayer_3390, 1)), 662);
    };
    IF_SETTEXT(string4, 60031081);
    string4 = struct_getparam(enum_getvalue(0, 73, 1011 as cs2enum, script1161(varplayer_3390, 2)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1011 as cs2enum, script1161(varplayer_3390, 2)), 662);
    };
    IF_SETTEXT(string4, 60031072);
    string4 = struct_getparam(enum_getvalue(0, 73, 1011 as cs2enum, script1161(varplayer_3390, 3)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1011 as cs2enum, script1161(varplayer_3390, 3)), 662);
    };
    IF_SETTEXT(string4, 60031075);
    string4 = struct_getparam(enum_getvalue(0, 73, 1012 as cs2enum, script1161(varplayer_3390, 4)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1012 as cs2enum, script1161(varplayer_3390, 4)), 662);
    };
    IF_SETTEXT(string4, 60031078);
    string4 = struct_getparam(enum_getvalue(0, 73, 1013 as cs2enum, script1161(varplayer_3390, 5)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1013 as cs2enum, script1161(varplayer_3390, 5)), 662);
    };
    IF_SETTEXT(string4, 60031069);
    script7252(varplayer_3390);
    IF_SETTEXT(inttostring(varplayer_3390, 10), 60031299);
    IF_SETHIDE(1, 60031080);
    IF_SETHIDE(1, 60031071);
    IF_SETHIDE(1, 60031074);
    IF_SETHIDE(1, 60031077);
    IF_SETHIDE(1, 60031068);
    script13971(60031298, -1, 28554, "Edit Crew", 1);
    IF_SETHIDE(0, 60031183);
    IF_SETHIDE(0, 60031187);
    IF_SETHIDE(0, 60031188);
    IF_SETHIDE(0, 60031189);
    IF_SETHIDE(0, 60031190);
    var int0 = -1 as struct;
    var int1 = script2047();
    switch (varplayer_3390) {
        case 1: {
            if ((script7293(1) == 0)) {
                int1 = varbitplayer_17071;
            };
            break;
        }
        case 2: {
            if ((script7293(2) == 0)) {
                int1 = varbitplayer_17082;
            };
            break;
        }
        case 3: {
            if ((script7293(3) == 0)) {
                int1 = varbitplayer_17093;
            };
            break;
        }
        case 4: {
            if ((script7293(4) == 0)) {
                int1 = varbitplayer_17104;
            };
            break;
        }
    };
    int0 = enum_getvalue(0, 73, 1022 as cs2enum, int1);
    if ((int0 == -1 as struct)) {
        return;
    };
    if (((varbitplayer_17130 > 0) && (int0 != 17069 as struct))) {
        IF_SETHIDE(0, 60031016);
        IF_SETHIDE(0, 60031009);
        IF_SETHIDE(1, 60031062);
        script7254(int0);
    } else {
        IF_SETHIDE(1, 60031016);
        IF_SETHIDE(0, 60031009);
        IF_SETHIDE(0, 60031062);
    };
    if (((varbitplayer_17495 >= 24) && (varbitplayer_17495 < 26))) {
        varclient_2611 = 1;
    } else if ((varbitplayer_17495 == 26)) {
        varclient_2611 = 2;
    } else if ((varbitplayer_17495 == 50)) {
        varclient_2611 = 1;
    } else if ((varbitplayer_17495 == 52)) {
        varclient_2611 = 2;
    };
    var string5 = "";
    var int2 = struct_getparam(int0, 3060);
    var int3 = struct_getparam(int0, 3062);
    var int4 = struct_getparam(int0, 3064);
    stack(-1);
    stack(60031241);
    IF_SETGRAPHIC();
    stack(-1);
    stack(60031246);
    IF_SETGRAPHIC();
    stack(-1);
    stack(60031251);
    IF_SETGRAPHIC();
    IF_SETTEXT("", 60031242);
    IF_SETTEXT("", 60031247);
    IF_SETTEXT("", 60031252);
    var string6 = "";
    var string7 = "";
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    if ((varclient_2611 > 0)) {
        IF_SETHIDE(1, 60031083);
        switch (varplayer_3390) {
            case 1: {
                int1 = varbitplayer_17071;
                break;
            }
            case 2: {
                int1 = varbitplayer_17082;
                break;
            }
            case 3: {
                int1 = varbitplayer_17093;
                break;
            }
            case 4: {
                int1 = varbitplayer_17104;
                break;
            }
        };
        if (((varbitplayer_17495 >= 24) && (varbitplayer_17495 <= 28))) {
            int1 = 415;
        } else if (((varbitplayer_17495 >= 50) && (varbitplayer_17495 <= 54))) {
            int1 = 417;
        };
        int0 = enum_getvalue(0, 73, 1022 as cs2enum, int1);
        if (((int0 != -1 as struct) && (int0 != 17069 as struct))) {
            int7 = struct_getparam(int0, 2366);
            string5 = script2057(int0, 0);
            IF_SETTEXT(string5, 60031191);
            if (((int7 == 13) && (((int0 == 17071 as struct) || (int0 == 17070 as struct)) || (int0 == 17072 as struct)))) {
                IF_SETHIDE(0, 60031218);
                if ((script17401() < (varplayer_3417 * 20000))) {
                    script13994(60031219, -1, 28556, `Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`, 1);
                } else {
                    script13993(60031219, -1, 28556, `Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`);
                };
            } else {
                IF_SETHIDE(1, 60031218);
            };
            if ((struct_getparam(int0, 3060) == 20)) {
                stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
                stack(60031241);
                IF_SETGRAPHIC();
            } else {
                stack(enum_getvalue(0, 23, 1024 as cs2enum, struct_getparam(int0, 3060)));
                stack(60031241);
                IF_SETGRAPHIC();
            };
            if ((struct_getparam(int0, 3062) == 20)) {
                stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
                stack(60031246);
                IF_SETGRAPHIC();
            } else {
                stack(enum_getvalue(0, 23, 1024 as cs2enum, struct_getparam(int0, 3062)));
                stack(60031246);
                IF_SETGRAPHIC();
            };
            if ((struct_getparam(int0, 3064) == 20)) {
                stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
                stack(60031251);
                IF_SETGRAPHIC();
            } else {
                stack(enum_getvalue(0, 23, 1024 as cs2enum, struct_getparam(int0, 3064)));
                stack(60031251);
                IF_SETGRAPHIC();
            };
            int5 = struct_getparam(int0, 3061);
            string6 = inttostring(int5, 10);
            if ((int7 == 2)) {
                string6 = enum_getvalue(0, 36, 7164 as cs2enum, int5);
                switch (int5) {
                    case 0: {
                        int6 = 26209;
                        break;
                    }
                    case 2: {
                        int6 = 26217;
                        break;
                    }
                    case 3: {
                        int6 = 26225;
                        break;
                    }
                    case 4: {
                        int6 = 26233;
                        break;
                    }
                    case 5: {
                        int6 = 26241;
                        break;
                    }
                    case 6: {
                        int6 = 26245;
                        break;
                    }
                    case 13: {
                        int6 = 30555;
                        break;
                    }
                    case 14: {
                        int6 = 30561;
                        break;
                    }
                };
            } else if (((int7 == 6) || (int7 == 10))) {
                switch (int5) {
                    case 1: {
                        string6 = "Whaler";
                        break;
                    }
                    case 2: {
                        string6 = "Biologist";
                        break;
                    }
                    case 3: {
                        string6 = "Occultist";
                        break;
                    }
                    case 4: {
                        string6 = "Assassin";
                        break;
                    }
                    case 5: {
                        string6 = "Convict";
                        break;
                    }
                    case 6: {
                        string6 = "Missionary";
                        break;
                    }
                    case 7: {
                        string6 = "Trapper";
                        break;
                    }
                    case 8: {
                        string6 = "Chef";
                        break;
                    }
                    case 9: {
                        string6 = "Architect";
                        break;
                    }
                    case 10: {
                        string6 = "Exile";
                        break;
                    }
                    case 11: {
                        string6 = "Memory";
                        break;
                    }
                    case 12: {
                        string6 = "Tengu";
                        break;
                    }
                };
            } else if ((int7 == 7)) {
                string6 = "Trait+";
            } else if ((int7 == 4)) {
                if ((int5 <= 12)) {
                    string6 = "XP";
                } else {
                    string6 = "XP x2";
                };
            } else if ((struct_getparam(int0, 3060) == 32)) {
                string6 = "Trait-";
            };
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, 60031242);
                string7 = enum_getvalue(0, 36, 1025 as cs2enum, int2);
                if ((int7 == 2)) {
                    string7 = `Unlock island: ${enum_getvalue(0, 36, 7164 as cs2enum, int5)}`;
                } else if ((int7 == 7)) {
                    string7 = `Captain gains a trait: ${struct_getparam(enum_getvalue(0, 73, 2175 as cs2enum, int5), 3090)}`;
                } else if ((int7 == 4)) {
                    switch (int5) {
                        case 1: {
                            string7 = "Slayer";
                            break;
                        }
                        case 2: {
                            string7 = "Runecrafting";
                            break;
                        }
                        case 3: {
                            string7 = "Fishing";
                            break;
                        }
                        case 4: {
                            string7 = "Thieving";
                            break;
                        }
                        case 5: {
                            string7 = "Herblore";
                            break;
                        }
                        case 6: {
                            string7 = "Prayer";
                            break;
                        }
                        case 7: {
                            string7 = "Hunter";
                            break;
                        }
                        case 8: {
                            string7 = "Cooking";
                            break;
                        }
                        case 9: {
                            string7 = "Construction";
                            break;
                        }
                        case 10: {
                            string7 = "Agility";
                            break;
                        }
                        case 11: {
                            string7 = "Divination";
                            break;
                        }
                        case 12: {
                            string7 = "Dungeoneering";
                            break;
                        }
                        case 13: {
                            string7 = "Slayer and Thieving";
                            break;
                        }
                        case 14: {
                            string7 = "Runecrafting and Prayer";
                            break;
                        }
                        case 15: {
                            string7 = "Fishing and Herblore";
                            break;
                        }
                        case 16: {
                            string7 = "Slayer and Hunter";
                            break;
                        }
                        case 17: {
                            string7 = "Herblore and Cooking";
                            break;
                        }
                        case 18: {
                            string7 = "Prayer and Construction";
                            break;
                        }
                        case 21: {
                            string7 = "Dungeoneering and Fishing";
                            break;
                        }
                        case 20: {
                            string7 = "Divination and Runecrafting";
                            break;
                        }
                        case 19: {
                            string7 = "Agility and Thieving";
                            break;
                        }
                    };
                    string7 = `Experience in ${string7}`;
                };
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), 60031241);
            };
            int5 = struct_getparam(int0, 3063);
            string6 = inttostring(int5, 10);
            if (((int7 == 2) && (int6 != -1))) {
                stack(item_getparam(int6, 3080));
                stack(60031246);
                IF_SETGRAPHIC();
                string7 = `Unlock crewman: ${OC_NAME(int6)}`;
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), 60031246);
                string6 = "";
            };
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, 60031247);
                string7 = enum_getvalue(0, 36, 1025 as cs2enum, int3);
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), 60031246);
            };
            int5 = struct_getparam(int0, 3065);
            string6 = inttostring(int5, 10);
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, 60031252);
                string7 = enum_getvalue(0, 36, 1025 as cs2enum, int4);
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), 60031251);
            };
        };
    };
    switch (varclient_2611) {
        case 0: {
            IF_SETHIDE(0, 60031080);
            IF_SETHIDE(0, 60031071);
            IF_SETHIDE(0, 60031074);
            IF_SETHIDE(0, 60031077);
            IF_SETHIDE(0, 60031068);
            script13971(60031298, -1, 28554, "Edit Crew", 0);
            IF_SETHIDE(1, 60031183);
            break;
        }
        case 1: {
            IF_SETHIDE(1, 60031016);
            IF_SETHIDE(1, 60031062);
            IF_SETHIDE(1, 60031009);
            IF_SETHIDE(0, 60031183);
            IF_SETHIDE(0, 60031187);
            IF_SETHIDE(1, 60031188);
            IF_SETHIDE(1, 60031189);
            IF_SETHIDE(1, 60031190);
            IF_SETHIDE(1, 60031263);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 60031016);
            IF_SETHIDE(1, 60031062);
            IF_SETHIDE(1, 60031009);
            IF_SETHIDE(0, 60031183);
            IF_SETHIDE(1, 60031187);
            IF_SETHIDE(0, 60031188);
            IF_SETHIDE(1, 60031189);
            IF_SETHIDE(1, 60031190);
            IF_SETHIDE(1, 60031263);
            break;
        }
    };
    return;
}