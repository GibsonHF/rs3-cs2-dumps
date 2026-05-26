//
function script18835(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    var int8 = 0;
    while ((++int8 <= 3)) {
        switch (int8) {
            case 1: {
                int0 = 84017159;
                int1 = 84017161;
                int2 = 84017162;
                int3 = 84017163;
                [int4, int5, int6] = [varplayer_11661, varplayer_11662, varplayer_11663];
                int7 = varplayer_11660;
                break;
            }
            case 2: {
                int0 = 84017157;
                int1 = 84017165;
                int2 = 84017166;
                int3 = 84017167;
                [int4, int5, int6] = [varplayer_11665, varplayer_11666, varplayer_11667];
                int7 = varplayer_11664;
                break;
            }
            case 3: {
                int0 = 84017155;
                int1 = 84017169;
                int2 = 84017170;
                int3 = 84017171;
                [int4, int5, int6] = [varplayer_11669, varplayer_11670, varplayer_11671];
                int7 = varplayer_11668;
                break;
            }
        };
        stack(script10980(int7));
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETTEXT(OC_NAME(int4), int2);
        IF_SETOPCURSOR(1, 201, int0);
        script18836(int1, int4, int5, int6, int7);
    };
    return;
}