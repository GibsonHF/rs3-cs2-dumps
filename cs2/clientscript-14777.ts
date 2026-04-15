//
function script14777(int0: component, int1: component): void {
    var int2 = 0;
    switch (int0) {
        case 42991649: {
            int2 = varbitplayer_35387;
            break;
        }
        case 42991659: {
            int2 = varbitplayer_37065;
            break;
        }
        case 42991654: {
            int2 = varbitplayer_37217;
            break;
        }
        case 42991675: {
            int2 = varbitplayer_37218;
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    };
    return;
}