//
function script7781(int0: obj, int1: int, int2: inv, int3: int, int4: unknown_int): unknown_int {
    var int5 = -1 as obj;
    var int6 = -1 as obj;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((item_getparam(int0, 8016) == 1)) {
        [int9, int10, int11] = script7782(0, 0, 0, int0, int1, int2, 1, int3, int4);
        if ((((int9 + int10) + int11) > 0)) {
            return 2;
        };
        return 1;
    };
    switch (int0) {
        case 492: {
            [int5, int6] = [-1 as obj, -1 as obj];
            break;
        }
        case 7952: {
            [int5, int6] = [-1 as obj, -1 as obj];
            break;
        }
        case 6743: {
            [int5, int6] = [6739 as obj, 6740 as obj];
            break;
        }
        case 520: {
            [int5, int6] = [1359 as obj, 1360 as obj];
            break;
        }
        case 518: {
            [int5, int6] = [1357 as obj, 1358 as obj];
            break;
        }
        case 516: {
            [int5, int6] = [1355 as obj, 1356 as obj];
            break;
        }
        case 514: {
            [int5, int6] = [1361 as obj, 1362 as obj];
            break;
        }
        case 512: {
            [int5, int6] = [1353 as obj, 1354 as obj];
            break;
        }
        case 510: {
            [int5, int6] = [1349 as obj, 1350 as obj];
            break;
        }
        case 508: {
            [int5, int6] = [1351 as obj, 1352 as obj];
            break;
        }
        case 6741: {
            [int5, int6] = [6739 as obj, 6740 as obj];
            break;
        }
        case 506: {
            [int5, int6] = [1359 as obj, 1360 as obj];
            break;
        }
        case 504: {
            [int5, int6] = [1357 as obj, 1358 as obj];
            break;
        }
        case 502: {
            [int5, int6] = [1355 as obj, 1356 as obj];
            break;
        }
        case 500: {
            [int5, int6] = [1361 as obj, 1362 as obj];
            break;
        }
        case 498: {
            [int5, int6] = [1353 as obj, 1354 as obj];
            break;
        }
        case 496: {
            [int5, int6] = [1349 as obj, 1350 as obj];
            break;
        }
        case 494: {
            [int5, int6] = [1351 as obj, 1352 as obj];
            break;
        }
        case 466: {
            [int5, int6] = [-1 as obj, -1 as obj];
            break;
        }
        case 490: {
            [int5, int6] = [45548 as obj, 1276 as obj];
            break;
        }
        case 488: {
            [int5, int6] = [45521 as obj, 1272 as obj];
            break;
        }
        case 486: {
            [int5, int6] = [45494 as obj, 1274 as obj];
            break;
        }
        case 484: {
            [int5, int6] = [45467 as obj, 1270 as obj];
            break;
        }
        case 482: {
            [int5, int6] = [1267 as obj, 1268 as obj];
            break;
        }
        case 480: {
            [int5, int6] = [1265 as obj, 1266 as obj];
            break;
        }
        case 478: {
            [int5, int6] = [45548 as obj, 1276 as obj];
            break;
        }
        case 476: {
            [int5, int6] = [45521 as obj, 1272 as obj];
            break;
        }
        case 474: {
            [int5, int6] = [45494 as obj, 1274 as obj];
            break;
        }
        case 472: {
            [int5, int6] = [45467 as obj, 1270 as obj];
            break;
        }
        case 470: {
            [int5, int6] = [1267 as obj, 1268 as obj];
            break;
        }
        case 468: {
            [int5, int6] = [1265 as obj, 1266 as obj];
            break;
        }
        case 7088: {
            [int5, int6] = [5988 as obj, 5989 as obj];
            break;
        }
        case 1873: {
            [int5, int6] = [1885 as obj, 1886 as obj];
            break;
        }
        case 1877: {
            [int5, int6] = [1885 as obj, 1886 as obj];
            break;
        }
        case 1879: {
            [int5, int6] = [1885 as obj, 1886 as obj];
            break;
        }
        case 1999: {
            [int5, int6] = [1997 as obj, 1998 as obj];
            break;
        }
        case 7228: {
            [int5, int6] = [2878 as obj, 2879 as obj];
            break;
        }
        default: {
            switch (OC_CATEGORY(int0)) {
                case 4451: {
                    int5 = enum_getvalue(33, 33, 15085 as cs2enum, int0);
                    if ((int5 == -1 as obj)) {
                        return 0;
                    };
                    int7 = enum_getvalue(33, 0, 15086 as cs2enum, int0);
                    if ((int7 <= 0)) {
                        return 0;
                    };
                    if (((2147483647 / int1) < int7)) {
                        int8 = 2147483647;
                        script12478(`Player name MAX INT'd via item ${OC_NAME(int0)} inside the GE`);
                    } else {
                        int8 = (int7 * int1);
                    };
                    int6 = OC_CERT(int5);
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
    };
    if ((int5 == -1 as obj)) {
        script7786("That item is no longer in use.");
        script7787(9704, 1, 0, 50, 256);
        script7788(int2, int0, int1);
        return 1;
    };
    if (((int4 == 1) && (int6 != -1 as obj))) {
        int5 = int6;
    };
    if ((int8 == 0)) {
        int8 = int1;
    };
    var int12 = script3793(93 as inv, int5, int8, (INV_SIZE(93 as inv) - int3));
    int8 = (int8 - int12);
    if ((int8 <= 0)) {
        script7787(10046, 1, 0, 100, 256);
        script7786("You do not have enough room in your inventory.");
        return 2;
    };
    script7786("That item is no longer in use. Please accept this substitute.");
    script7787(9704, 1, 0, 50, 256);
    script7788(int2, int0, int1);
    script7792(93 as inv, int5, int8);
    return 1;
}