//
function script13025(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    switch (varclient_5917) {
        case 1: {
            script8800("Show locked tracks only", int0, -1);
            IF_SETGRAPHIC(29237 as graphic, int0);
            break;
        }
        case 2: {
            script8800("Show all tracks", int0, -1);
            IF_SETGRAPHIC(29239 as graphic, int0);
            break;
        }
        default: {
            script8800("Show unlocked tracks only", int0, -1);
            IF_SETGRAPHIC(29235 as graphic, int0);
            break;
        }
    };
    return;
}