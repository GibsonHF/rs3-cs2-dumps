//
function script8977(): void {
    IF_SETHIDE(1, 98041971);
    IF_SETHIDE(1, 98041972);
    IF_SETHIDE(1, 98041977);
    IF_SETHIDE(1, 98041993);
    IF_SETHIDE(1, 98042002);
    IF_SETHIDE(1, 98042006);
    IF_SETHIDE(1, 98042013);
    IF_SETHIDE(1, 98042043);
    IF_SETHIDE(1, 98042051);
    IF_SETHIDE(1, 98042061);
    IF_SETHIDE(1, 98042066);
    IF_SETHIDE(1, 98042069);
    IF_SETHIDE(1, 98042074);
    var int0 = -1;
    switch (varbitplayer_18639) {
        case 0: {
            IF_SETHIDE(0, 98042069);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 98042074);
            break;
        }
        case 2: {
            int0 = script8978((varbitplayer_18640 - 1));
            if ((int0 != -1)) {
                IF_SETHIDE(0, int0);
            };
            break;
        }
        case 3: {
            int0 = script8979(varbitplayer_18640);
            if ((int0 != -1)) {
                IF_SETHIDE(0, int0);
            };
            break;
        }
        case 4: {
            IF_SETHIDE(0, 98041971);
            break;
        }
    };
    return;
}