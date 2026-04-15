//
function script7761(int0: struct): unknown_int {
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var int5 = 20;
    while ((int4 <= int5)) {
        switch (int4) {
            case 1: {
                if (((script4148() == false) || (struct_getparam(int0, 4589) == 0))) {
                    int2 = struct_getparam(int0, 1294);
                    int3 = struct_getparam(int0, 1295);
                } else {
                    int2 = struct_getparam(int0, 4588);
                    int3 = struct_getparam(int0, 4589);
                };
                break;
            }
            case 2: {
                int2 = struct_getparam(int0, 1296);
                int3 = struct_getparam(int0, 1297);
                break;
            }
            case 3: {
                int2 = struct_getparam(int0, 1298);
                int3 = struct_getparam(int0, 1299);
                break;
            }
            case 4: {
                int2 = struct_getparam(int0, 1300);
                int3 = struct_getparam(int0, 1301);
                break;
            }
            case 5: {
                int2 = struct_getparam(int0, 1302);
                int3 = struct_getparam(int0, 1303);
                break;
            }
            case 6: {
                int2 = struct_getparam(int0, 1304);
                int3 = struct_getparam(int0, 1305);
                break;
            }
            case 7: {
                int2 = struct_getparam(int0, 1306);
                int3 = struct_getparam(int0, 1307);
                break;
            }
            case 8: {
                int2 = struct_getparam(int0, 1308);
                int3 = struct_getparam(int0, 1309);
                break;
            }
            case 9: {
                int2 = struct_getparam(int0, 1310);
                int3 = struct_getparam(int0, 1311);
                break;
            }
            case 10: {
                int2 = struct_getparam(int0, 1312);
                int3 = struct_getparam(int0, 1313);
                break;
            }
            case 11: {
                int2 = struct_getparam(int0, 2227);
                int3 = struct_getparam(int0, 2228);
                break;
            }
            case 12: {
                int2 = struct_getparam(int0, 2229);
                int3 = struct_getparam(int0, 2230);
                break;
            }
            case 13: {
                int2 = struct_getparam(int0, 4474);
                int3 = struct_getparam(int0, 4475);
                break;
            }
            case 14: {
                int2 = struct_getparam(int0, 6434);
                int3 = struct_getparam(int0, 6435);
                break;
            }
            case 15: {
                int2 = struct_getparam(int0, 6436);
                int3 = struct_getparam(int0, 6437);
                break;
            }
            case 16: {
                int2 = struct_getparam(int0, 6438);
                int3 = struct_getparam(int0, 6439);
                break;
            }
            case 17: {
                int2 = struct_getparam(int0, 6440);
                int3 = struct_getparam(int0, 6441);
                break;
            }
            case 18: {
                int2 = struct_getparam(int0, 6442);
                int3 = struct_getparam(int0, 6443);
                break;
            }
            case 19: {
                int2 = struct_getparam(int0, 6444);
                int3 = struct_getparam(int0, 6445);
                break;
            }
            case 20: {
                int2 = struct_getparam(int0, 6446);
                int3 = struct_getparam(int0, 6447);
                break;
            }
        };
        if (((int2 > 0) && (int2 < 60))) {
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int2)) < int3)) {
                return 0;
            };
        } else if ((int2 == 60)) {
            int1 = script5795(int3);
            if ((int1 == -1 as struct)) {
                return 0;
            };
            if ((script3227(int3) != 2)) {
                return 0;
            };
        } else if (((int2 == 61) && (script7073(int3) != 2))) {
            return 0;
        };
        if ((int2 == 0)) {
            int4 = (int5 + 1);
        } else {
            int4 = (int4 + 1);
        };
    };
    if ((script1432() < struct_getparam(int0, 2233))) {
        return 0;
    };
    return -1;
}