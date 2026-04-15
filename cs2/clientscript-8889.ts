//
function script8889(): void {
    if ((LOBBY_ENTERGAMEREPLY() != 0)) {
        return;
    };
    if (((varbitplayer_16467 != 0) && (varplayer_3185 == 4))) {
        IF_SETONVARTRANSMIT(callback(), comp(906, 14));
        script6190();
    };
    switch (varplayer_3185) {
        case 0: {
            return;
        }
        case 1: {
            script5940();
            break;
        }
        case 2: {
            script6190();
            break;
        }
        case 3:
        case 6: {
            script5940();
            break;
        }
        case 4: {
            IF_SETONVARCTRANSMIT(callback(), comp(906, 14));
            script6192();
            break;
        }
        case 5: {
            script5940();
            break;
        }
        default: {
            script6190();
            break;
        }
    };
    return;
}