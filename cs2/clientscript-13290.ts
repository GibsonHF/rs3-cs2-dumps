//
function script13290(int0: struct): unknown_int {
    var int1 = -1 as quest;
    if ((struct_getparam(int0, 1345) > 0)) {
        int1 = struct_getparam(int0, 1403);
        if ((int1 != -1 as quest)) {
            if (((QUEST_GETMEMBERS(int1) == true) && (MAP_MEMBERS() == 0))) {
                return 0;
            };
            if ((varplayer_1297 < QUEST_POINTSREQ(int1))) {
                return 0;
            };
            if ((script1432() < quest_getparam(int1, 7859))) {
                return 0;
            };
            if ((script4035() < quest_getparam(int1, 7860))) {
                return 0;
            };
            if (((quest_getparam(int1, 7862) == true) && (script2194(int1) == 0))) {
                return 0;
            };
            if (((quest_getparam(int1, 7861) == true) && (varbitplayer_9663 == 0))) {
                return 0;
            };
            if ((script2154(int1) == 0)) {
                return 0;
            };
            if ((script2152(int1) == 0)) {
                return 0;
            };
            return 1;
        };
    };
    if (((((struct_getparam(int0, 8072) == -1 as cs2enum) && (struct_getparam(int0, 6415) != 1)) && (struct_getparam(int0, 1290) != 1)) && ((PLAYERMEMBER() == false) || (MAP_MEMBERS() == 0)))) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 20;
    var int6 = -1 as struct;
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
        switch (int3) {
            case 61: {
                if ((script7073(int4) != 2)) {
                    return 0;
                };
                break;
            }
            case 60: {
                int6 = enum_getvalue(0, 73, 12251 as cs2enum, int4);
                if ((int6 == -1 as struct)) {
                    script12478(`Struct #${inttostring(int4, 10)} not found in [cheevo_id_to_struct] enum.`);
                    return 0;
                };
                if (((struct_getparam(int6, 6416) == 0) && (script13281(int6) < script13569(int6)))) {
                    return 0;
                };
                break;
            }
            case 63: {
                if ((script1432() < int4)) {
                    return 0;
                };
                break;
            }
            case 64: {
                if ((varplayer_1297 < int4)) {
                    return 0;
                };
                break;
            }
            case 65: {
                if ((script4035() < int4)) {
                    return 0;
                };
                break;
            }
            case 62: {
                if ((struct_getparam(int0, 1346) > 0)) {
                    [int4, string0] = script16085(int4);
                } else if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
                    [int4, string0] = script13302(struct_getparam(enum_getvalue(0, 73, struct_getparam(int0, 8072), 0), 6413));
                } else {
                    [int4, string0] = script13302(struct_getparam(int0, 6413));
                };
                if ((int4 == 0)) {
                    return 0;
                };
                break;
            }
            default: {
                if (((int3 > 0) && (int3 < 60))) {
                    if ((STAT_BASE_ACTUAL(enum_getvalue(0, 17, 681 as cs2enum, int3)) < int4)) {
                        return 0;
                    };
                } else {
                    int2 = int5;
                };
                break;
            }
        };
        int2 = (int2 + 1);
    };
    return 1;
}