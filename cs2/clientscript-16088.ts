//
function script16088(int0: struct): int {
    if ((struct_getparam(int0, 8522) == false)) {
        return 0;
    };
    if ((struct_getparam(int0, 1294) == 0)) {
        return 1;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = 1;
    var string0 = "";
    var int5 = 0;
    while ((int5 < 12)) {
        switch (int5) {
            case 0: {
                [int1, int2] = [struct_getparam(int0, 1294), struct_getparam(int0, 1295)];
                break;
            }
            case 1: {
                [int1, int2] = [struct_getparam(int0, 1296), struct_getparam(int0, 1297)];
                break;
            }
            case 2: {
                [int1, int2] = [struct_getparam(int0, 1298), struct_getparam(int0, 1299)];
                break;
            }
            case 3: {
                [int1, int2] = [struct_getparam(int0, 1300), struct_getparam(int0, 1301)];
                break;
            }
            case 4: {
                [int1, int2] = [struct_getparam(int0, 1302), struct_getparam(int0, 1303)];
                break;
            }
            case 5: {
                [int1, int2] = [struct_getparam(int0, 1304), struct_getparam(int0, 1305)];
                break;
            }
            case 6: {
                [int1, int2] = [struct_getparam(int0, 1306), struct_getparam(int0, 1307)];
                break;
            }
            case 7: {
                [int1, int2] = [struct_getparam(int0, 1308), struct_getparam(int0, 1309)];
                break;
            }
            case 8: {
                [int1, int2] = [struct_getparam(int0, 1310), struct_getparam(int0, 1311)];
                break;
            }
            case 9: {
                [int1, int2] = [struct_getparam(int0, 1312), struct_getparam(int0, 1313)];
                break;
            }
            case 10: {
                [int1, int2] = [struct_getparam(int0, 2227), struct_getparam(int0, 2228)];
                break;
            }
            case 11: {
                [int1, int2] = [struct_getparam(int0, 2229), struct_getparam(int0, 2230)];
                break;
            }
        };
        if (((int1 > 0) && (int1 < 60))) {
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int1)) < int2)) {
                return 0;
            };
        } else if ((int1 == 60)) {
            int3 = script5795(int2);
            if ((int3 != -1 as struct)) {
                if ((script3227(struct_getparam(int3, 1268)) != 2)) {
                    return 0;
                };
                int3 = -1 as struct;
            };
        } else if ((int1 == 61)) {
            if ((script1524(int2) == 0)) {
                return 0;
            };
        } else if ((int1 == 66)) {
        } else if ((int1 == 62)) {
            [int4, string0] = script16085(int2);
            if ((int4 == 0)) {
                return 0;
            };
        };
        if ((int1 == 0)) {
            int5 = 12;
        } else {
            int5 = (int5 + 1);
        };
    };
    return int4;
}