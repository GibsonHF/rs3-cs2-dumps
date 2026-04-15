//
function script16838(int0: int): int {
    var int1 = 0;
    switch (int0) {
        case 0: {
            int1 = (((script4708() / 500) + (varplayer_1297 / 50)) + (varplayer_7122 / 2000));
            break;
        }
        case 1: {
            int1 = (script4708() / 500);
            break;
        }
        case 2: {
            int1 = (varplayer_1297 / 50);
            break;
        }
        case 3: {
            int1 = (varplayer_7122 / 2000);
            break;
        }
        default: {
            script12478(`Unexpected token source: ${inttostring(int0, 10)}`);
            break;
        }
    };
    int1 = MIN(int1, script16839());
    return int1;
}