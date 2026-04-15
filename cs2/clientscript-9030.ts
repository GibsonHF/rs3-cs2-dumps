//
function script9030(int0: struct, int1: quest, int2: achievement): [int, string] {
    var int3 = 0;
    if ((((int0 == -1 as struct) && (int1 == -1 as quest)) && (int2 == -1 as achievement))) {
        return [int3, ""];
    };
    if (((int0 != -1 as struct) && (struct_getparam(int0, 4253) != -1 as struct))) {
        var int0 = struct_getparam(int0, 4253);
    };
    var string0 = "";
    var int4 = 0;
    var int5 = 0;
    var string1 = "";
    var int6 = 0;
    var int7 = script7663(int0, int1, int2);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    switch (int7) {
        case 2: {
            if ((int2 != -1 as achievement)) {
                int3 = ACHIEVEMENT_REQSTATE(int2);
                string0 = script10988(int2);
            };
            break;
        }
        case 1: {
            if ((int1 != -1 as quest)) {
                if ((script2125(int1) == 0)) {
                    int3 = -1;
                } else {
                    switch (script2193(int1)) {
                        case 2: {
                            int3 = -2;
                            break;
                        }
                        default: {
                            int3 = 0;
                            break;
                        }
                    };
                };
                if ((QUEST_GETMEMBERS(int1) == true)) {
                    if ((PLAYERMEMBER() == false)) {
                        string0 = "Membership<br>";
                    } else if ((MAP_MEMBERS() == 0)) {
                        string0 = "Log in to a Members' World<br>";
                    };
                    string0 = strconcat(string0, script2126(int1));
                };
            };
            break;
        }
        case 6:
        case 0: {
            if ((script7761(int0) == 0)) {
                int3 = -1;
            } else {
                switch (int0) {
                    case 24120: {
                        if ((varclient_5212 == 0)) {
                            int3 = -1;
                        };
                        break;
                    }
                    default: {
                        int3 = 0;
                        break;
                    }
                };
            };
            string0 = script13327(int0);
            string1 = "";
            switch (int0) {
                case 1651: {
                    break;
                }
                default: {
                    if ((struct_getparam(int0, 1294) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 1);
                    } else if ((struct_getparam(int0, 1296) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 2);
                    } else if ((struct_getparam(int0, 1298) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 3);
                    } else if ((struct_getparam(int0, 1300) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 4);
                    } else if ((struct_getparam(int0, 1302) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 5);
                    } else if ((struct_getparam(int0, 1304) == 62)) {
                        string1 = script3223(struct_getparam(int0, 1268), 6);
                    };
                    break;
                }
            };
            if ((STRING_LENGTH(string1) > 0)) {
                if ((STRING_LENGTH(string0) > 0)) {
                    string0 = strconcat(string0, "<br>");
                };
                string0 = strconcat(string0, string1);
            };
            [int4, int5] = script9132(struct_getparam(int0, 1268));
            string1 = "";
            switch (int4) {
                case 2:
                case 5: {
                    int3 = -1;
                    string1 = `Available in ${script9171(int5, 0)}`;
                    break;
                }
                case 3:
                case 7: {
                    int3 = -1;
                    string1 = `Resets in ${script9171(int5, 0)}`;
                    break;
                }
                case 6: {
                    int3 = -1;
                    string1 = "Currently no upcoming stars";
                    break;
                }
                case -1: {
                    if (((int3 == -1) && (STRING_LENGTH(string0) == 0))) {
                        string1 = "Locked";
                    };
                    int3 = -1;
                    break;
                }
            };
            if ((STRING_LENGTH(string1) > 0)) {
                if ((STRING_LENGTH(string0) > 0)) {
                    string0 = strconcat(string0, "<br>");
                };
                string0 = strconcat(string0, string1);
            };
            break;
        }
        case 4: {
            int3 = 0;
            if ((struct_getparam(int0, 2236) > 1)) {
                if ((int0 == script16319(1))) {
                    string0 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 2236), 10)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_16574)}`;
                } else if ((int0 == script16319(2))) {
                    string0 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 2236), 10)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_16578)}`;
                } else if ((int0 == script16319(3))) {
                    string0 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 2236), 10)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_16582)}`;
                } else if ((int0 == script16319(4))) {
                    string0 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 2236), 10)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_16586)}`;
                } else if ((int0 == script16319(5))) {
                    string0 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 2236), 10)} ${enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_16590)}`;
                };
            };
            string1 = script13327(int0);
            if ((STRING_LENGTH(string1) > 0)) {
                string0 = `${string0}<br>${string1}`;
            };
            break;
        }
        case 8: {
            if ((struct_getparam(int0, 1353) > script1432())) {
                int3 = -1;
            } else if ((script16088(int0) == 0)) {
                int3 = -1;
            };
            if ((int3 == -2)) {
                int3 = 0;
            };
            string0 = script13327(int0);
            break;
        }
        case 3: {
            string0 = script13327(int0);
            [int8, int9, int10] = script13289(struct_getparam(int0, 8072));
            if ((int8 >= int9)) {
                int3 = -2;
                int0 = -1 as struct;
            } else {
                [int4, int0] = script6301(int0, 0, -1);
            };
            if ((int0 != -1 as struct)) {
                int3 = script13280(int0);
                string0 = script13327(int0);
            };
            break;
        }
        case 7: {
            int3 = 0;
            int0 = script16091();
            if ((int0 != -1 as struct)) {
                if ((struct_getparam(int0, 466) > 0)) {
                    string1 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 466), 10)} Slayer`;
                    if ((STRING_LENGTH(string1) > 0)) {
                        if ((STRING_LENGTH(string0) > 0)) {
                            string0 = `${string0}<br>${string1}`;
                        } else {
                            string0 = string1;
                        };
                    };
                };
                if ((struct_getparam(int0, 465) > 0)) {
                    string1 = `<str=FFFFFE>${inttostring(struct_getparam(int0, 465), 10)} combat level`;
                    if ((STRING_LENGTH(string1) > 0)) {
                        if ((STRING_LENGTH(string0) > 0)) {
                            string0 = `${string0}<br>${string1}`;
                        } else {
                            string0 = string1;
                        };
                    };
                };
            };
            break;
        }
        default: {
            script12478(`Unhandled struct of system #${inttostring(int7, 10)} in [proc,crs_reqs]. Can't get reqs`);
            break;
        }
    };
    return [int3, string0];
}