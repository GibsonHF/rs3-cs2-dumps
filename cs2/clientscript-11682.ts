//
function script11682(int0: npc): int {
    var int1 = MIN(npc_getparam(int0, 379), INV_SIZE(530 as inv));
    switch (int0) {
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
                    int1 = (int1 + 4);
                    break;
                }
                case 15:
                case 16:
                case 17: {
                    int1 = (int1 + 18);
                    break;
                }
            };
            break;
        }
    };
    if ((npc_getparam(int0, 5048) == 1)) {
        int1 = varbitplayer_27748;
    };
    return int1;
}