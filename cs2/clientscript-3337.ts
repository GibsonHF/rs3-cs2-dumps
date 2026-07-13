//
function script3337(int0: number, int1: number): void {
    var int2 = 0;
    switch (int0) {
        case 1: {
            int2 = varclient_1469;
            break;
        }
        case 2: {
            int2 = varclient_1470;
            break;
        }
        case 5: {
            int2 = varclient_1471;
            break;
        }
        case 3: {
            int2 = varclient_1472;
            break;
        }
        case 7: {
            int2 = varclient_1473;
            break;
        }
        case 4: {
            int2 = varclient_1474;
            break;
        }
        case 6: {
            int2 = varclient_1475;
            break;
        }
        case 8: {
            int2 = varclient_1476;
            break;
        }
        case 9: {
            int2 = varclient_1477;
            break;
        }
        case 10: {
            int2 = varclient_1478;
            break;
        }
        case 11: {
            int2 = varclient_1479;
            break;
        }
        case 19: {
            int2 = varclient_1480;
            break;
        }
        case 13: {
            int2 = varclient_1481;
            break;
        }
        case 14: {
            int2 = varclient_1482;
            break;
        }
        case 15: {
            int2 = varclient_1483;
            break;
        }
        case 16: {
            int2 = varclient_1484;
            break;
        }
        case 17: {
            int2 = varclient_1485;
            break;
        }
        case 18: {
            int2 = varclient_1486;
            break;
        }
        case 12: {
            int2 = varclient_1487;
            break;
        }
        case 20: {
            int2 = varclient_1488;
            break;
        }
        case 21: {
            int2 = varclient_1489;
            break;
        }
        case 22: {
            int2 = varclient_1490;
            break;
        }
        case 23: {
            int2 = varclient_1491;
            break;
        }
        case 24: {
            int2 = varclient_1492;
            break;
        }
        case 25: {
            int2 = varclient_1493;
            break;
        }
        case 26: {
            int2 = varclient_3715;
            break;
        }
        case 27: {
            int2 = varclient_5125;
            break;
        }
        case 28: {
            int2 = varclient_6783;
            break;
        }
        case 29: {
            int2 = varclient_7292;
            break;
        }
        default: {
            return;
        }
    };
    var int3 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    var int4 = STAT_BASE(int3);
    var int5 = enum_getvalue(0, 26, 5420 as cs2enum, int0);
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    var int7 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    int7 = enum_getvalue(17, 17, 744 as cs2enum, int7);
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as struct;
    var string0 = "";
    var int11 = -1;
    var int12 = -1;
    var int1 = (int1 / 5);
    if (((int4 > int2) && (int4 <= 120))) {
        string0 = script16836(int2, int3);
        if ((STRING_LENGTH(string0) > 0)) {
            script3367(string0, int9, int1);
            int9 = (int9 + 1);
        };
        switch (int0) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 7:
            case 4:
            case 6:
            case 24:
            case 29: {
                if ((varbitplayer_3294 == 1)) {
                    varbitplayer_3294 = 0;
                    script3367("Increased Combat level!", int9, int1);
                    int9 = (int9 + 1);
                };
                break;
            }
        };
        if (((int0 == 7) || (int0 == 6))) {
            if ((int0 == 7)) {
                script3367("More prayer points!", int9, int1);
            } else {
                script3367("More lifepoints!", int9, int1);
            };
            int9 = (int9 + 1);
        };
        while (((int8 < int6) && (int9 < 5))) {
            int10 = enum_getvalue(0, 73, int5, int8);
            int9 = script16267(int10, -1, int9, int2, int4, int1);
            int8 = (int8 + 1);
        };
        if ((int9 < 5)) {
            switch (int3) {
                case 22: {
                    int11 = script20817(int2, int4);
                    unk11023(int11, 1515664, 1);
                    dbrow_findnext();
                    int12 = stack();
                    while (((int12 != -1) && (int9 < 5))) {
                        int9 = script16267(-1 as struct, int12, int9, int2, int4, int1);
                        dbrow_findnext();
                        int12 = stack();
                    };
                    break;
                }
            };
        };
    };
    return;
}