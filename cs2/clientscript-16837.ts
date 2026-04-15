//
function script16837(int0: int): int {
    var int1 = 0;
    switch (int0) {
        case 1: {
            int1 = (2898 / 500);
            break;
        }
        case 2: {
            int1 = (varplayer_423 / 50);
            break;
        }
        case 3: {
            int1 = (31000 / 2000);
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