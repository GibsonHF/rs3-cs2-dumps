//
function script13290(int0: number): number {
    if ((((struct_getparam(int0, 8072) == -1 as cs2enum) && (struct_getparam(int0, 6415) != 1)) && (struct_getparam(int0, 1290) != 1))) {
        if (((PLAYERMEMBER() == false) || (MAP_MEMBERS() == 0))) {
            return 0;
        };
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var int4 = 20;
    var int5 = -1 as struct;
    while ((int1 < int4)) {
        switch (int1) {
            case 0: {
                if (((script4148() == 0) || (struct_getparam(int0, 4589) == 0))) {
                    int2 = struct_getparam(int0, 1294);
                    int3 = struct_getparam(int0, 1295);
                } else {
                    int2 = struct_getparam(int0, 4588);
                    int3 = struct_getparam(int0, 4589);
                };
                break;
            }
            case 1: {
                int2 = struct_getparam(int0, 1296);
                int3 = struct_getparam(int0, 1297);
                break;
            }
            case 2: {
                int2 = struct_getparam(int0, 1298);
                int3 = struct_getparam(int0, 1299);
                break;
            }
            case 3: {
                int2 = struct_getparam(int0, 1300);
                int3 = struct_getparam(int0, 1301);
                break;
            }
            case 4: {
                int2 = struct_getparam(int0, 1302);
                int3 = struct_getparam(int0, 1303);
                break;
            }
            case 5: {
                int2 = struct_getparam(int0, 1304);
                int3 = struct_getparam(int0, 1305);
                break;
            }
            case 6: {
                int2 = struct_getparam(int0, 1306);
                int3 = struct_getparam(int0, 1307);
                break;
            }
            case 7: {
                int2 = struct_getparam(int0, 1308);
                int3 = struct_getparam(int0, 1309);
                break;
            }
            case 8: {
                int2 = struct_getparam(int0, 1310);
                int3 = struct_getparam(int0, 1311);
                break;
            }
            case 9: {
                int2 = struct_getparam(int0, 1312);
                int3 = struct_getparam(int0, 1313);
                break;
            }
            case 10: {
                int2 = struct_getparam(int0, 2227);
                int3 = struct_getparam(int0, 2228);
                break;
            }
            case 11: {
                int2 = struct_getparam(int0, 2229);
                int3 = struct_getparam(int0, 2230);
                break;
            }
            case 12: {
                int2 = struct_getparam(int0, 4474);
                int3 = struct_getparam(int0, 4475);
                break;
            }
            case 13: {
                int2 = struct_getparam(int0, 6434);
                int3 = struct_getparam(int0, 6435);
                break;
            }
            case 14: {
                int2 = struct_getparam(int0, 6436);
                int3 = struct_getparam(int0, 6437);
                break;
            }
            case 15: {
                int2 = struct_getparam(int0, 6438);
                int3 = struct_getparam(int0, 6439);
                break;
            }
            case 16: {
                int2 = struct_getparam(int0, 6440);
                int3 = struct_getparam(int0, 6441);
                break;
            }
            case 17: {
                int2 = struct_getparam(int0, 6442);
                int3 = struct_getparam(int0, 6443);
                break;
            }
            case 18: {
                int2 = struct_getparam(int0, 6444);
                int3 = struct_getparam(int0, 6445);
                break;
            }
            case 19: {
                int2 = struct_getparam(int0, 6446);
                int3 = struct_getparam(int0, 6447);
                break;
            }
        };
        switch (int2) {
            case 61: {
                if ((script7073(int3) != 2)) {
                    return 0;
                };
                break;
            }
            case 60: {
                int5 = enum_getvalue(0, 73, 12251 as cs2enum, int3);
                if ((int5 == -1 as struct)) {
                    script12478(`Struct #${inttostring(int3, 10)} not found in [cheevo_id_to_struct] enum.`);
                    return 0;
                };
                if (((struct_getparam(int5, 6416) == 0) && (script13281(int5) < script13569(int5)))) {
                    return 0;
                };
                break;
            }
            case 63: {
                if ((script1432() < int3)) {
                    return 0;
                };
                break;
            }
            case 64: {
                if ((varplayer_1297 < int3)) {
                    return 0;
                };
                break;
            }
            case 65: {
                if ((script4035() < int3)) {
                    return 0;
                };
                break;
            }
            case 62: {
                if ((struct_getparam(int0, 1346) > 0)) {
                    [int3, string0] = script16085(int3);
                } else if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
                    [int3, string0] = script13302(struct_getparam(enum_getvalue(0, 73, struct_getparam(int0, 8072), 0), 6413));
                } else {
                    [int3, string0] = script13302(struct_getparam(int0, 6413));
                };
                if ((int3 == 0)) {
                    return 0;
                };
                break;
            }
            default: {
                if ((int2 > 0)) {
                    if ((int2 < 60)) {
                        if ((STAT_BASE_ACTUAL(enum_getvalue(0, 17, 681 as cs2enum, int2)) < int3)) {
                            return 0;
                        };
                    } else {
                        int1 = int4;
                    };
                } else {
                    int1 = int4;
                };
                break;
            }
        };
        int1 = (int1 + 1);
    };
    return 1;
}