//
function script9254(int0: number, int1: number): void {
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(671, 11)), 0, 0, comp(671, 11));  // lore_bank:mainmodal_window
    IF_SETHIDE(int1, comp(671, 15));  // lore_bank:player_inv_holder
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
    script9233(43974682, 43974683, 43974680, 43974684, 530, 0, 0, int2, 1);
    if ((int1 == false)) {
        script9233(43974687, 43974688, 43974685, 43974689, 93, 0, 0, (INV_SIZE(93 as inv) - 1), 1);
    };
    if ((script6431() == 1)) {
        IF_SETPOSITION(15, 5, 2, 0, comp(671, 16));  // lore_bank:bob_icon_layer
    };
    return;
}