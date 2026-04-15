//
function script13356(int0: struct, int1: unknown_int): unknown_int {
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as stat;
    var int5 = -1 as quest;
    var int6 = 0;
    switch (int1) {
        case 1: {
            int2 = struct_getparam(int0, 1294);
            int3 = struct_getparam(int0, 1295);
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
    };
    if ((int2 == 0)) {
        if ((int1 == 1)) {
            return 1;
        };
        return 1;
    };
    if ((int2 < 60)) {
        int4 = enum_getvalue(0, 17, 681 as cs2enum, int2);
        if ((int4 != -1 as stat)) {
            if ((STAT_BASE(int4) >= int3)) {
                return 1;
            };
            return 0;
        };
    } else {
        if ((int2 == 61)) {
            int5 = enum_getvalue(0, 3, 2252 as cs2enum, int3);
            if ((script2193(int5) == 2)) {
                return 1;
            };
            return 0;
        };
        int6 = script5812(struct_getparam(int0, 1268), int1);
        return int6;
    };
    return -1;
}