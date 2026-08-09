//
function script18835(): void {
    var int0 = comp(-1, 65535);
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    var int8 = 0;
    int8 = (int8 + 1);
    while ((int8 <= 3)) {
        switch (int8) {
            case 1: {
                int0 = comp(1282, 7);
                int1 = 84017161;
                int2 = comp(1282, 10);
                int3 = comp(1282, 11);
                [int4, int5, int6] = [varplayer_11661, varplayer_11662, varplayer_11663];
                int7 = varplayer_11660;
                break;
            }
            case 2: {
                int0 = comp(1282, 5);
                int1 = 84017165;
                int2 = comp(1282, 14);
                int3 = comp(1282, 15);
                [int4, int5, int6] = [varplayer_11665, varplayer_11666, varplayer_11667];
                int7 = varplayer_11664;
                break;
            }
            case 3: {
                int0 = comp(1282, 3);
                int1 = 84017169;
                int2 = comp(1282, 18);
                int3 = comp(1282, 19);
                [int4, int5, int6] = [varplayer_11669, varplayer_11670, varplayer_11671];
                int7 = varplayer_11668;
                break;
            }
        };
        IF_SETGRAPHIC(script10980(int7), int3);
        IF_SETTEXT(OC_NAME(int4), int2);
        IF_SETOPCURSOR(1, 201, int0);
        script18836(int1, int4, int5, int6, int7);
    };
    return;
}