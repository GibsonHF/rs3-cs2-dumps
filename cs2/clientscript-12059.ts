//
function script12059(int0: int): int {
    if ((int0 < 0)) {
        return 1;
    };
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varplayer_5981, MODULO(int0, 32));
        }
        case 1: {
            return TESTBIT(varplayer_5982, MODULO(int0, 32));
        }
        case 2: {
            return TESTBIT(varplayer_5983, MODULO(int0, 32));
        }
        case 3: {
            return TESTBIT(varplayer_6633, MODULO(int0, 32));
        }
        case 4: {
            return TESTBIT(varplayer_7249, MODULO(int0, 32));
        }
        case 5: {
            return TESTBIT(varplayer_12212, MODULO(int0, 32));
        }
    };
    script12478(`Blueprint ID: ${inttostring((int0 / 32), 10)} is out of bounds - need to add new %invent_blueprint_unlocked_X var`);
    return 0;
}