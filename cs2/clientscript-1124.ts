//
function script1124(int0: int): int {
    var int1 = varclient_2603;
    var int2 = varclient_2604;
    switch (int0) {
        case 1: {
            int2 = (int2 + varbitplayer_17073);
            break;
        }
        case 2: {
            int2 = (int2 + varbitplayer_17084);
            break;
        }
        case 3: {
            int2 = (int2 + varbitplayer_17095);
            break;
        }
        case 4: {
            int2 = (int2 + varbitplayer_17106);
            break;
        }
        default: {
            return 0;
        }
    };
    int2 = MIN(MAX(int2, -20), 35);
    int1 = SCALE((100 + int2), 100, int1);
    return int1;
}