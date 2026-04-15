//
function script430(int0: unknown_int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = comp(-1, 65535);
    var int6 = 0;
    switch (int0) {
        case 67108872: {
            if ((varclient_1388 == 1)) {
                int2 = 1;
            } else {
                int2 = varbitplayer_5415;
            };
            int5 = comp(1024, 39);
            break;
        }
        case 67108874: {
            if ((varclient_1388 == 1)) {
                int2 = 3;
            } else {
                int2 = varbitplayer_5416;
            };
            int5 = comp(1024, 32);
            break;
        }
        case 67108876: {
            if ((varclient_1388 == 1)) {
                int2 = 5;
            } else {
                int2 = varbitplayer_5417;
            };
            int5 = comp(1024, 25);
            break;
        }
        case 67108878: {
            if ((varclient_1388 == 1)) {
                int2 = 6;
            } else {
                int2 = varbitplayer_5418;
            };
            int5 = comp(1024, 18);
            break;
        }
        default: {
            return;
        }
    };
    switch (int2) {
        case 1: {
            [int4, int6] = [varclient_1378, struct_getparam(293, 1154)];
            break;
        }
        case 2: {
            [int4, int6] = [varclient_1379, struct_getparam(299, 1154)];
            break;
        }
        case 3: {
            [int4, int6] = [varclient_1380, struct_getparam(300, 1154)];
            break;
        }
        case 4: {
            [int4, int6] = [varclient_1386, struct_getparam(301, 1154)];
            break;
        }
        case 5: {
            [int4, int6] = [varclient_1381, struct_getparam(305, 1154)];
            break;
        }
        case 6: {
            [int4, int6] = [varclient_1383, struct_getparam(1044, 1154)];
            break;
        }
        case 7: {
            [int4, int6] = [varclient_1384, struct_getparam(1045, 1154)];
            break;
        }
        case 8: {
            [int4, int6] = [varclient_1385, struct_getparam(1046, 1154)];
            break;
        }
        case 9: {
            [int4, int6] = [varclient_1382, struct_getparam(1047, 1154)];
            break;
        }
        default: {
            return;
        }
    };
    if (((int4 == 0) && (varbitplayer_5390 >= int6))) {
        if ((int1 == 1)) {
            int3 = 14931919;
        } else {
            int3 = 14931919;
        };
        IF_SETCOLOUR(int3, int5);
    };
    return;
}