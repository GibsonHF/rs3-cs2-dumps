//
function script20048(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    var int8 = 0;
    while ((++int8 <= 2)) {
        switch (int8) {
            case 1: {
                int0 = 87949323;
                int1 = 87949325;
                int2 = 87949328;
                int3 = 87949329;
                [int4, int5, int6] = [varplayer_12243, varplayer_12244, varplayer_12245];
                int7 = varplayer_12249;
                break;
            }
            case 2: {
                int0 = 87949321;
                int1 = 87949331;
                int2 = 87949334;
                int3 = 87949335;
                [int4, int5, int6] = [varplayer_12246, varplayer_12247, varplayer_12248];
                int7 = varplayer_12250;
                break;
            }
        };
        stack(script10980(int7));
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETTEXT(OC_NAME(int4), int2);
        IF_SETOPCURSOR(1, 201, int0);
        script20049(int1, int4, int5, int6, int7);
    };
    return;
}