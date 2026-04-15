//
function script7860(int0: unknown_int, int1: idkit, int2: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    var int3 = -1 as struct;
    var int4 = -1;
    switch (int2) {
        case 0:
        case 7: {
            varclient_1008 = int1;
            BASEIDKIT(int2, int1);
            SOUND_VORBIS_RATE(script5925(7274 as cs2enum), 1, 0, 180, 255);
            break;
        }
        case 1:
        case 8: {
            varclient_1009 = int1;
            BASEIDKIT(int2, int1);
            SOUND_VORBIS_RATE(script5925(7274 as cs2enum), 1, 0, 180, 255);
            break;
        }
        case 2:
        case 9:
        case 3:
        case 10:
        case 4:
        case 11: {
            varclient_86 = 0;
            SETOBJ(2, 19713);
            SETOBJ(3, -1);
            SETOBJ(5, -1);
            SOUND_VORBIS_RATE(script5925(7266 as cs2enum), 1, 0, 100, 350);
            switch (int2) {
                case 2:
                case 9: {
                    varclient_1010 = int1;
                    int4 = 3;
                    break;
                }
                case 3:
                case 10: {
                    varclient_1011 = int1;
                    int4 = 4;
                    break;
                }
                case 4:
                case 11: {
                    varclient_1012 = int1;
                    int4 = 5;
                    break;
                }
            };
            int3 = script2793(int1, int4);
            if ((int3 != -1 as struct)) {
                if ((GENDER() == 1)) {
                    varclient_1010 = struct_getparam(int3, 1182);
                    BASEIDKIT(9, varclient_1010);
                    varclient_1011 = struct_getparam(int3, 1183);
                    BASEIDKIT(10, varclient_1011);
                    varclient_1012 = struct_getparam(int3, 1184);
                    BASEIDKIT(11, varclient_1012);
                } else {
                    varclient_1010 = struct_getparam(int3, 1182);
                    BASEIDKIT(2, varclient_1010);
                    varclient_1011 = struct_getparam(int3, 1183);
                    BASEIDKIT(3, varclient_1011);
                    varclient_1012 = struct_getparam(int3, 1184);
                    BASEIDKIT(4, varclient_1012);
                };
            } else {
                BASEIDKIT(int2, int1);
            };
            break;
        }
        case 5:
        case 12: {
            varclient_86 = 0;
            SETOBJ(2, 19713);
            SETOBJ(3, -1);
            SETOBJ(5, -1);
            BASEIDKIT(int2, int1);
            varclient_1013 = int1;
            SOUND_VORBIS_RATE(script5925(7266 as cs2enum), 1, 0, 100, 350);
            break;
        }
        case 6:
        case 13: {
            varclient_86 = 0;
            SETOBJ(2, 19713);
            SETOBJ(3, -1);
            SETOBJ(5, -1);
            BASEIDKIT(int2, int1);
            varclient_1014 = int1;
            SOUND_VORBIS_RATE(script5925(7265 as cs2enum), 1, 0, 150, 350);
            break;
        }
        default: {
            return;
        }
    };
    script7867();
    return;
}