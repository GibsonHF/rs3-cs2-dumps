//
function script16843(int0: unknown_int): int {
    if (((script249() == 0) || (script16823() == false))) {
        return 0;
    };
    var int1 = 0;
    if ((varbitplayer_51798 == 1)) {
        int1 = 10;
    } else if ((varbitplayer_51798 == 2)) {
        int1 = 25;
    };
    switch (int0) {
        case 0: {
            return SCALE(script16858(), 100, int1);
        }
        case 1: {
            return SCALE(script16939(), 100, int1);
        }
        case 2: {
            return SCALE(script16855(), 100, int1);
        }
    };
    return 0;
}