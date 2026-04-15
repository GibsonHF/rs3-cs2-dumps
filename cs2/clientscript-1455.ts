//
function script1455(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    switch (varclient_6348) {
        case 1: {
            script8800("Stop the current track from looping", int0, -1);
            stack(32099);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            script8800("Loop the current track", int0, -1);
            stack(32101);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}