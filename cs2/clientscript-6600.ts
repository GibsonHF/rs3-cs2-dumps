//
function script6600(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 12190;
    var int3 = 12191;
    var int4 = 12189;
    var int5 = 12192;
    var int6 = 0;
    while ((int6 < 5)) {
        switch (int6) {
            case 0: {
                int0 = 86900749;
                int1 = varbitplayer_9416;
                break;
            }
            case 1: {
                int0 = 86900775;
                int1 = varbitplayer_9417;
                break;
            }
            case 2: {
                int0 = 86900787;
                int1 = varbitplayer_9418;
                break;
            }
            case 3: {
                int0 = 86900797;
                int1 = varbitplayer_9419;
                break;
            }
            case 4: {
                int0 = 86900808;
                int1 = varbitplayer_9420;
                break;
            }
        };
        switch (int1) {
            case 0: {
                stack(-1);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                stack(int2);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(int3);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(int4);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                stack(int5);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
        };
        int6 = (int6 + 1);
    };
    return;
}