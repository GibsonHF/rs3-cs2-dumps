//
function script20048(): void {
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
    while ((int8 <= 2)) {
        switch (int8) {
            case 1: {
                int0 = comp(1342, 11);
                int1 = 87949325;
                int2 = comp(1342, 16);
                int3 = comp(1342, 17);
                [int4, int5, int6] = [varplayer_12243, varplayer_12244, varplayer_12245];
                int7 = varplayer_12249;
                break;
            }
            case 2: {
                int0 = comp(1342, 9);
                int1 = 87949331;
                int2 = comp(1342, 22);
                int3 = comp(1342, 23);
                [int4, int5, int6] = [varplayer_12246, varplayer_12247, varplayer_12248];
                int7 = varplayer_12250;
                break;
            }
        };
        IF_SETGRAPHIC(script10980(int7), int3);
        IF_SETTEXT(OC_NAME(int4), int2);
        IF_SETOPCURSOR(1, 201, int0);
        script20049(int1, int4, int5, int6, int7);
    };
    return;
}