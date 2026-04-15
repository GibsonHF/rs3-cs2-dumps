//
function script16810(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 197)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 807008, 0);
    var int2 = dbrow_getfield(int0, 806928, 0);
    switch (int0) {
        case 6545: {
            if ((varbitplayer_52198 == 1)) {
                int2 = (int2 / 2);
            };
            varclient_6987 = (CLIENTCLOCK() + (int2 * 30));
            break;
        }
        case 6546: {
            if ((varbitplayer_52198 == 1)) {
                int2 = (int2 / 2);
            };
            varclient_6988 = (CLIENTCLOCK() + (int2 * 30));
            break;
        }
        case 6547: {
            if ((varbitplayer_52198 == 1)) {
                int2 = (int2 / 2);
            };
            varclient_6989 = (CLIENTCLOCK() + (int2 * 30));
            break;
        }
        case 6548: {
            if ((varbitplayer_52198 == 1)) {
                int2 = (int2 / 2);
            };
            varclient_6990 = (CLIENTCLOCK() + (int2 * 30));
            break;
        }
        default: {
            switch (int1) {
                case 1: {
                    varclient_7078 = (CLIENTCLOCK() + (int2 * 30));
                    break;
                }
                case 2: {
                    varclient_7079 = (CLIENTCLOCK() + (int2 * 30));
                    break;
                }
                case 3: {
                    varclient_7080 = (CLIENTCLOCK() + (int2 * 30));
                    break;
                }
                case 4: {
                    varclient_7081 = (CLIENTCLOCK() + (int2 * 30));
                    break;
                }
                default: {
                    script12478(`Undefined variable slot ${inttostring(int1, 10)} in minigame_ability_cooldown_set.`);
                    break;
                }
            };
            break;
        }
    };
    return;
}