//
function script5871(int0: unknown_int, int1: unknown_int): void {
    if ((script8076(1013 as overlayinterface) == 0)) {
        script5773(0);
        return;
    };
    var int2 = CAM_GETANGLE_YA();
    var int3 = 0;
    var int4 = -1 as coordgrid;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 == 0)) {
        if ((varclient_1360 < 10)) {
            varclient_1360 = (varclient_1360 + 1);
            return;
        };
        if ((varclient_1359 < 5)) {
            varclient_1359 = (varclient_1359 + 1);
            return;
        };
        varclient_1359 = 0;
    };
    if ((int2 < 128)) {
        int2 = 1;
    } else if ((int2 < 256)) {
        int2 = 2;
    } else if ((int2 < 384)) {
        int2 = 3;
    } else if ((int2 < 512)) {
        int2 = 4;
    } else if ((int2 < 640)) {
        int2 = 5;
    } else if ((int2 < 768)) {
        int2 = 6;
    } else if ((int2 < 896)) {
        int2 = 7;
    } else if ((int2 < 1024)) {
        int2 = 8;
    } else if ((int2 < 1152)) {
        int2 = 9;
    } else if ((int2 < 1280)) {
        int2 = 10;
    } else if ((int2 < 1408)) {
        int2 = 11;
    } else if ((int2 < 1536)) {
        int2 = 12;
    } else if ((int2 < 1664)) {
        int2 = 13;
    } else if ((int2 < 1792)) {
        int2 = 14;
    } else if ((int2 < 1920)) {
        int2 = 15;
    } else {
        int2 = 16;
    };
    switch (int0) {
        case 1: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 1;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 8;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 7;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 6;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 5;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 4;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 3;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 2;
                    break;
                }
            };
            break;
        }
        case 5: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 5;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 4;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 3;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 2;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 1;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 8;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 7;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 6;
                    break;
                }
            };
            break;
        }
        case 7: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 7;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 6;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 5;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 4;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 3;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 2;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 1;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 8;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 3;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 2;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 1;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 8;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 7;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 6;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 5;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 4;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 2;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 1;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 8;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 7;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 6;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 5;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 4;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 3;
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 4;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 3;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 2;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 1;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 8;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 7;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 6;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 5;
                    break;
                }
            };
            break;
        }
        case 8: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 8;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 7;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 6;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 5;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 4;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 3;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 2;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 1;
                    break;
                }
            };
            break;
        }
        case 6: {
            switch (int2) {
                case 1:
                case 16: {
                    int3 = 6;
                    break;
                }
                case 2:
                case 3: {
                    int3 = 5;
                    break;
                }
                case 4:
                case 5: {
                    int3 = 4;
                    break;
                }
                case 6:
                case 7: {
                    int3 = 3;
                    break;
                }
                case 8:
                case 9: {
                    int3 = 2;
                    break;
                }
                case 10:
                case 11: {
                    int3 = 1;
                    break;
                }
                case 12:
                case 13: {
                    int3 = 8;
                    break;
                }
                case 14:
                case 15: {
                    int3 = 7;
                    break;
                }
            };
            break;
        }
        default: {
            return;
        }
    };
    switch (int3) {
        case 1: {
            int4 = MOVECOORD(varclient_1353, 0, 0, 1);
            break;
        }
        case 2: {
            int4 = MOVECOORD(varclient_1353, 1, 0, 1);
            break;
        }
        case 3: {
            int4 = MOVECOORD(varclient_1353, 1, 0, 0);
            break;
        }
        case 4: {
            int4 = MOVECOORD(varclient_1353, 1, 0, -1);
            break;
        }
        case 5: {
            int4 = MOVECOORD(varclient_1353, 0, 0, -1);
            break;
        }
        case 6: {
            int4 = MOVECOORD(varclient_1353, -1, 0, -1);
            break;
        }
        case 7: {
            int4 = MOVECOORD(varclient_1353, -1, 0, 0);
            break;
        }
        case 8: {
            int4 = MOVECOORD(varclient_1353, -1, 0, 1);
            break;
        }
        default: {
            return;
        }
    };
    if ((varclient_1390 == 1)) {
        int5 = 44;
        int6 = 35;
        int7 = 31;
        int8 = 17;
    } else {
        int5 = 54;
        int6 = 35;
        int7 = 36;
        int8 = 17;
    };
    if (((((MODULO(COORDX(int4), 64) > int5) || (MODULO(COORDZ(int4), 64) > int7)) || (MODULO(COORDX(int4), 64) < int6)) || (MODULO(COORDZ(int4), 64) < int8))) {
        IF_SETCOLOUR(6579300, comp(1013, 19));
        IF_SETCOLOUR(6579300, comp(1013, 18));
        IF_SETCOLOUR(6579300, comp(1013, 20));
        IF_SETCOLOUR(6579300, comp(1013, 21));
        IF_SETCOLOUR(6579300, comp(1013, 17));
        IF_SETCOLOUR(6579300, comp(1013, 15));
        IF_SETCOLOUR(6579300, comp(1013, 16));
        IF_SETCOLOUR(6579300, comp(1013, 14));
        return;
    };
    IF_SETCOLOUR(0, comp(1013, 19));
    IF_SETCOLOUR(0, comp(1013, 18));
    IF_SETCOLOUR(0, comp(1013, 20));
    IF_SETCOLOUR(0, comp(1013, 21));
    IF_SETCOLOUR(0, comp(1013, 17));
    IF_SETCOLOUR(0, comp(1013, 15));
    IF_SETCOLOUR(0, comp(1013, 16));
    IF_SETCOLOUR(0, comp(1013, 14));
    varclient_1353 = int4;
    CAM_FOLLOWCOORD(varclient_1353);
    return;
}