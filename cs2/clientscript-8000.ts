//
function script8000(): void {
    if (((IF_GET_GAMESCREEN() == comp(-1, 65535)) || (script6354(IF_GET_GAMESCREEN()) == 0))) {
        IF_SETONTIMER(callback(script1094), comp(1477, 31));
        return;
    };
    IF_SETONTIMER(callback(), comp(1477, 31));
    switch (varplayer_1114) {
        case 1: {
            script2121();
            script8079(1);
            break;
        }
        case 2: {
            script2122();
            script8079(1);
            break;
        }
        case 3: {
            script2123();
            script8079(1);
            break;
        }
        default: {
            script7545();
            script8079(0);
            break;
        }
    };
    return;
}