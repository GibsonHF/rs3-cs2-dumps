//
function script13327(int0: struct): string {
    var string0 = "";
    var int1 = -1 as quest;
    if ((struct_getparam(int0, 1345) > 0)) {
        int1 = struct_getparam(int0, 1403);
        if ((int1 != -1 as quest)) {
            if ((QUEST_GETMEMBERS(int1) == true)) {
                if ((PLAYERMEMBER() == false)) {
                    string0 = "Membership<br>";
                } else if ((MAP_MEMBERS() == 0)) {
                    string0 = "Log in to a Members' World<br>";
                };
            };
            string0 = strconcat(string0, script2126(int1));
        };
        return string0;
    };
    if (((struct_getparam(int0, 6415) != 1) && (struct_getparam(int0, 1290) != 1))) {
        if ((PLAYERMEMBER() == false)) {
            string0 = "Membership<br>";
        } else if ((MAP_MEMBERS() == 0)) {
            string0 = "Log in to a Members' World<br>";
        };
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string1 = "";
    var int5 = 20;
    var int6 = 0;
    var int7 = -1 as struct;
    var int8 = -1 as obj;
    var int9 = -1 as graphic;
    while ((int2 < int5)) {
        switch (int2) {
            case 0: {
                if (((script4148() == false) || (struct_getparam(int0, 4589) == 0))) {
                    int3 = struct_getparam(int0, 1294);
                    int4 = struct_getparam(int0, 1295);
                } else {
                    int3 = struct_getparam(int0, 4588);
                    int4 = struct_getparam(int0, 4589);
                };
                break;
            }
            case 1: {
                int3 = struct_getparam(int0, 1296);
                int4 = struct_getparam(int0, 1297);
                break;
            }
            case 2: {
                int3 = struct_getparam(int0, 1298);
                int4 = struct_getparam(int0, 1299);
                break;
            }
            case 3: {
                int3 = struct_getparam(int0, 1300);
                int4 = struct_getparam(int0, 1301);
                break;
            }
            case 4: {
                int3 = struct_getparam(int0, 1302);
                int4 = struct_getparam(int0, 1303);
                break;
            }
            case 5: {
                int3 = struct_getparam(int0, 1304);
                int4 = struct_getparam(int0, 1305);
                break;
            }
            case 6: {
                int3 = struct_getparam(int0, 1306);
                int4 = struct_getparam(int0, 1307);
                break;
            }
            case 7: {
                int3 = struct_getparam(int0, 1308);
                int4 = struct_getparam(int0, 1309);
                break;
            }
            case 8: {
                int3 = struct_getparam(int0, 1310);
                int4 = struct_getparam(int0, 1311);
                break;
            }
            case 9: {
                int3 = struct_getparam(int0, 1312);
                int4 = struct_getparam(int0, 1313);
                break;
            }
            case 10: {
                int3 = struct_getparam(int0, 2227);
                int4 = struct_getparam(int0, 2228);
                break;
            }
            case 11: {
                int3 = struct_getparam(int0, 2229);
                int4 = struct_getparam(int0, 2230);
                break;
            }
            case 12: {
                int3 = struct_getparam(int0, 4474);
                int4 = struct_getparam(int0, 4475);
                break;
            }
            case 13: {
                int3 = struct_getparam(int0, 6434);
                int4 = struct_getparam(int0, 6435);
                break;
            }
            case 14: {
                int3 = struct_getparam(int0, 6436);
                int4 = struct_getparam(int0, 6437);
                break;
            }
            case 15: {
                int3 = struct_getparam(int0, 6438);
                int4 = struct_getparam(int0, 6439);
                break;
            }
            case 16: {
                int3 = struct_getparam(int0, 6440);
                int4 = struct_getparam(int0, 6441);
                break;
            }
            case 17: {
                int3 = struct_getparam(int0, 6442);
                int4 = struct_getparam(int0, 6443);
                break;
            }
            case 18: {
                int3 = struct_getparam(int0, 6444);
                int4 = struct_getparam(int0, 6445);
                break;
            }
            case 19: {
                int3 = struct_getparam(int0, 6446);
                int4 = struct_getparam(int0, 6447);
                break;
            }
        };
        if ((int3 != 0)) {
            switch (int3) {
                case 61: {
                    if ((script7073(int4) == 2)) {
                        string0 = strconcat(string0, "<str=FFFFFE>");
                    };
                    string0 = strconcat(string0, `${script13298(int4)}<br>`);
                    break;
                }
                case 60: {
                    int7 = enum_getvalue(0, 73, 12251 as cs2enum, int4);
                    if ((int7 == -1 as struct)) {
                        script12478(`Struct #${inttostring(int4, 10)} not found in [cheevo_id_to_struct] enum.`);
                        return "";
                    };
                    if ((script13280(int7) == -2)) {
                        string0 = strconcat(string0, "<str=FFFFFE>");
                    };
                    string0 = strconcat(string0, `Achievement: ${script13284(int7)} (${script13285(int7, 1)})<br>`);
                    break;
                }
                case 63: {
                    if ((script1432() >= int4)) {
                        string0 = strconcat(string0, "<str=FFFFFE>");
                    };
                    string0 = strconcat(string0, `Combat Level: ${TOSTRING_LOCALISED(int4, 1)}<br>`);
                    break;
                }
                case 64: {
                    if ((varplayer_1297 >= int4)) {
                        string0 = strconcat(string0, "<str=FFFFFE>");
                    };
                    string0 = strconcat(string0, `Quest Points: ${TOSTRING_LOCALISED(int4, 1)}<br>`);
                    break;
                }
                case 65: {
                    if ((script4035() >= int4)) {
                        string0 = strconcat(string0, "<str=FFFFFE>");
                    };
                    string0 = strconcat(string0, `Varrock Museum Kudos: ${TOSTRING_LOCALISED(int4, 1)}<br>`);
                    break;
                }
                case 62: {
                    if ((struct_getparam(int0, 1346) > 0)) {
                        [int4, int8, int9, string1] = script16084(int4);
                        if ((STRING_LENGTH(string1) > 0)) {
                            string1 = strconcat(string1, "<br>");
                        };
                    } else {
                        [int4, string1] = script13302(struct_getparam(int0, 6413));
                    };
                    string0 = strconcat(string0, string1);
                    break;
                }
                default: {
                    if ((int3 < 60)) {
                        int6 = (int6 + 1);
                    };
                    break;
                }
            };
        };
        int2 = (int2 + 1);
    };
    if ((int6 > 0)) {
        int2 = 0;
        while ((int2 < int5)) {
            switch (int2) {
                case 0: {
                    if (((script4148() == false) || (struct_getparam(int0, 4589) == 0))) {
                        int3 = struct_getparam(int0, 1294);
                        int4 = struct_getparam(int0, 1295);
                    } else {
                        int3 = struct_getparam(int0, 4588);
                        int4 = struct_getparam(int0, 4589);
                    };
                    break;
                }
                case 1: {
                    int3 = struct_getparam(int0, 1296);
                    int4 = struct_getparam(int0, 1297);
                    break;
                }
                case 2: {
                    int3 = struct_getparam(int0, 1298);
                    int4 = struct_getparam(int0, 1299);
                    break;
                }
                case 3: {
                    int3 = struct_getparam(int0, 1300);
                    int4 = struct_getparam(int0, 1301);
                    break;
                }
                case 4: {
                    int3 = struct_getparam(int0, 1302);
                    int4 = struct_getparam(int0, 1303);
                    break;
                }
                case 5: {
                    int3 = struct_getparam(int0, 1304);
                    int4 = struct_getparam(int0, 1305);
                    break;
                }
                case 6: {
                    int3 = struct_getparam(int0, 1306);
                    int4 = struct_getparam(int0, 1307);
                    break;
                }
                case 7: {
                    int3 = struct_getparam(int0, 1308);
                    int4 = struct_getparam(int0, 1309);
                    break;
                }
                case 8: {
                    int3 = struct_getparam(int0, 1310);
                    int4 = struct_getparam(int0, 1311);
                    break;
                }
                case 9: {
                    int3 = struct_getparam(int0, 1312);
                    int4 = struct_getparam(int0, 1313);
                    break;
                }
                case 10: {
                    int3 = struct_getparam(int0, 2227);
                    int4 = struct_getparam(int0, 2228);
                    break;
                }
                case 11: {
                    int3 = struct_getparam(int0, 2229);
                    int4 = struct_getparam(int0, 2230);
                    break;
                }
                case 12: {
                    int3 = struct_getparam(int0, 4474);
                    int4 = struct_getparam(int0, 4475);
                    break;
                }
                case 13: {
                    int3 = struct_getparam(int0, 6434);
                    int4 = struct_getparam(int0, 6435);
                    break;
                }
                case 14: {
                    int3 = struct_getparam(int0, 6436);
                    int4 = struct_getparam(int0, 6437);
                    break;
                }
                case 15: {
                    int3 = struct_getparam(int0, 6438);
                    int4 = struct_getparam(int0, 6439);
                    break;
                }
                case 16: {
                    int3 = struct_getparam(int0, 6440);
                    int4 = struct_getparam(int0, 6441);
                    break;
                }
                case 17: {
                    int3 = struct_getparam(int0, 6442);
                    int4 = struct_getparam(int0, 6443);
                    break;
                }
                case 18: {
                    int3 = struct_getparam(int0, 6444);
                    int4 = struct_getparam(int0, 6445);
                    break;
                }
                case 19: {
                    int3 = struct_getparam(int0, 6446);
                    int4 = struct_getparam(int0, 6447);
                    break;
                }
            };
            if (((int3 != 0) && (int3 < 60))) {
                if ((STAT_BASE_ACTUAL(enum_getvalue(0, 17, 681 as cs2enum, int3)) >= int4)) {
                    string0 = strconcat(string0, "<str=FFFFFE>");
                };
                string0 = strconcat(string0, `${script13294(int4, int3)}<br>`);
            };
            int2 = (int2 + 1);
        };
    };
    return string0;
}