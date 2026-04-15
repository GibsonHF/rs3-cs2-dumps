//
function script16809(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if ((DB_GETROWTABLE(int0) != 197)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 807008, 0);
    switch (int0) {
        case 6545: {
            return varclient_6987;
        }
        case 6546: {
            return varclient_6988;
        }
        case 6547: {
            return varclient_6989;
        }
        case 6548: {
            return varclient_6990;
        }
    };
    switch (int1) {
        case 1: {
            return varclient_7078;
        }
        case 2: {
            return varclient_7079;
        }
        case 3: {
            return varclient_7080;
        }
        case 4: {
            return varclient_7081;
        }
    };
    script12478(`Undefined variable slot ${inttostring(int1, 10)} in minigame_ability_cooldown_get`);
    return 0;
}