//
function script429(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = comp(-1, 65535);
    var int6 = 0;
    while ((int6 < 4)) {
        switch (int6) {
            case 0: {
                if ((varclient_1388 == 1)) {
                    int0 = 1;
                } else {
                    int0 = varbitplayer_5415;
                };
                int2 = comp(1024, 41);
                int3 = comp(1024, 43);
                int5 = comp(1024, 42);
                break;
            }
            case 1: {
                if ((varclient_1388 == 1)) {
                    int0 = 3;
                } else {
                    int0 = varbitplayer_5416;
                };
                int2 = comp(1024, 34);
                int3 = comp(1024, 36);
                int5 = comp(1024, 35);
                break;
            }
            case 2: {
                if ((varclient_1388 == 1)) {
                    int0 = 5;
                } else {
                    int0 = varbitplayer_5417;
                };
                int2 = comp(1024, 27);
                int3 = comp(1024, 29);
                int5 = comp(1024, 28);
                break;
            }
            case 3: {
                if ((varclient_1388 == 1)) {
                    int0 = 6;
                } else {
                    int0 = varbitplayer_5418;
                };
                int2 = comp(1024, 20);
                int3 = comp(1024, 22);
                int5 = comp(1024, 21);
                break;
            }
        };
        switch (int0) {
            case 1: {
                int1 = varclient_1378;
                int4 = struct_getparam(293, 1154);
                break;
            }
            case 2: {
                int1 = varclient_1379;
                int4 = struct_getparam(299, 1154);
                break;
            }
            case 3: {
                int1 = varclient_1380;
                int4 = struct_getparam(300, 1154);
                break;
            }
            case 4: {
                int1 = varclient_1386;
                int4 = struct_getparam(301, 1154);
                break;
            }
            case 5: {
                int1 = varclient_1381;
                int4 = struct_getparam(305, 1154);
                break;
            }
            case 6: {
                int1 = varclient_1383;
                int4 = struct_getparam(1044, 1154);
                break;
            }
            case 7: {
                int1 = varclient_1384;
                int4 = struct_getparam(1045, 1154);
                break;
            }
            case 8: {
                int1 = varclient_1385;
                int4 = struct_getparam(1046, 1154);
                break;
            }
            case 9: {
                int1 = varclient_1382;
                int4 = struct_getparam(1047, 1154);
                break;
            }
            default: {
                int0 = 0;
                break;
            }
        };
        if ((int0 != 0)) {
            if (((int1 > 0) || (varbitplayer_5390 < int4))) {
                if ((int1 > 0)) {
                    IF_SETTEXT(inttostring(int1, 10), int5);
                };
                IF_SETCOLOUR(2631720, int2);
                IF_SETHIDE(false, int3);
            } else {
                IF_SETTEXT("", int5);
                IF_SETCOLOUR(0, int2);
                IF_SETHIDE(true, int3);
            };
        };
        int6 = (int6 + 1);
    };
    return;
}