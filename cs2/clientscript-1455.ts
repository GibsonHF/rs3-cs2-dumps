//
function script1455(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    switch (varclient_6348) {
        case 1: {
            script8800("Stop the current track from looping", int0, -1);
            IF_SETGRAPHIC(32099 as graphic, int0);
            break;
        }
        default: {
            script8800("Loop the current track", int0, -1);
            IF_SETGRAPHIC(32101 as graphic, int0);
            break;
        }
    };
    return;
}