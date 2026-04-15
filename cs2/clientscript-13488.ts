//
function script13488(int0: int): int {
    var int1 = MODULO(int0, 32);
    var int2 = 0;
    switch ((int0 / 32)) {
        case 0: {
            int2 = TESTBIT(varplayer_7020, int1);
            break;
        }
        case 1: {
            int2 = TESTBIT(varplayer_7021, int1);
            break;
        }
        case 2: {
            int2 = TESTBIT(varplayer_7022, int1);
            break;
        }
        case 3: {
            int2 = TESTBIT(varplayer_7023, int1);
            break;
        }
        case 4: {
            int2 = TESTBIT(varplayer_7024, int1);
            break;
        }
        case 5: {
            int2 = TESTBIT(varplayer_7025, int1);
            break;
        }
        case 6: {
            int2 = TESTBIT(varplayer_12309, int1);
            break;
        }
        default: {
            script12478("Tried to testbit on a variable that doesn't exist. Please add another slayer_codex_x var.");
            break;
        }
    };
    return int2;
}