//
function script9254(int0: int, int1: boolean): void {
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(671, 11)), 0, 0, comp(671, 11));
    IF_SETHIDE(int1, comp(671, 15));
    var int2 = (INV_SIZE(530 as inv) - 1);
    if ((varplayer_1784 != -1 as npc)) {
        int2 = (npc_getparam(varplayer_1784, 379) - 1);
        switch (varplayer_1784) {
            case 17399:
            case 17400:
            case 17401:
            case 17402:
            case 17406:
            case 17407:
            case 17405:
            case 17403:
            case 17404: {
                switch (varbitplayer_18580) {
                    case 12:
                    case 13:
                    case 14: {
                        int2 = (int2 + 4);
                        break;
                    }
                    case 15:
                    case 16:
                    case 17: {
                        int2 = (int2 + 18);
                        break;
                    }
                };
                break;
            }
        };
    };
    script9233(comp(671, 26), comp(671, 27), comp(671, 24), comp(671, 28), 530 as inv, 0, 0, int2, 1);
    if ((int1 == false)) {
        script9233(comp(671, 31), comp(671, 32), comp(671, 29), comp(671, 33), 93 as inv, 0, 0, (INV_SIZE(93 as inv) - 1), 1);
    };
    if ((script6431() == true)) {
        IF_SETPOSITION(15, 5, 2, 0, comp(671, 16));
    };
    return;
}