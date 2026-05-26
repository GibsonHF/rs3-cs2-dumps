//
function script6600(): void {
    var int0 = comp(-1, 65535);
    var int1 = 0;
    var int2 = 12190 as graphic;
    var int3 = 12191 as graphic;
    var int4 = 12189 as graphic;
    var int5 = 12192 as graphic;
    var int6 = 0;
    while ((int6 < 5)) {
        switch (int6) {
            case 0: {
                int0 = comp(1326, 13);
                int1 = varbitplayer_9416;
                break;
            }
            case 1: {
                int0 = comp(1326, 39);
                int1 = varbitplayer_9417;
                break;
            }
            case 2: {
                int0 = comp(1326, 51);
                int1 = varbitplayer_9418;
                break;
            }
            case 3: {
                int0 = comp(1326, 61);
                int1 = varbitplayer_9419;
                break;
            }
            case 4: {
                int0 = comp(1326, 72);
                int1 = varbitplayer_9420;
                break;
            }
        };
        switch (int1) {
            case 0: {
                IF_SETGRAPHIC(-1 as graphic, int0);
                break;
            }
            case 1: {
                IF_SETGRAPHIC(int2, int0);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(int3, int0);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(int4, int0);
                break;
            }
            case 4: {
                IF_SETGRAPHIC(int5, int0);
                break;
            }
        };
        int6 = (int6 + 1);
    };
    return;
}