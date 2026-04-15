//
function script13025(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    switch (varclient_5917) {
        case 1: {
            script8800("Show locked tracks only", int0, -1);
            stack(29237);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            script8800("Show all tracks", int0, -1);
            stack(29239);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            script8800("Show unlocked tracks only", int0, -1);
            stack(29235);
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}