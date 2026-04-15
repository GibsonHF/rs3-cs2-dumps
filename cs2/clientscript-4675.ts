//
function script4675(): void {
    var int0 = (varbitplayer_4758 * 10);
    var int1 = 0;
    if ((varclient_1530 < int0)) {
        varclient_1530 = (varclient_1530 + 1);
        SOUND_VORBIS_VOLUME(5251 as vorbis, 1, 0, 255);
    };
    script4542(varclient_1530, comp(102, 48), comp(102, 53));
    switch (varbitplayer_4766) {
        case 1: {
            int1 = (varbitplayer_4769 * 10);
            break;
        }
        case 2: {
            int1 = (varbitplayer_4770 * 10);
            break;
        }
        case 3: {
            int1 = (varbitplayer_4771 * 10);
            break;
        }
        case 4: {
            int1 = (varbitplayer_4772 * 10);
            break;
        }
        case 5: {
            int1 = (varbitplayer_4773 * 10);
            break;
        }
        case 6: {
            int1 = (varbitplayer_4774 * 10);
            break;
        }
    };
    if (((varclient_1530 >= int0) && (varclient_1531 >= int1))) {
        script4676(varbitplayer_4766);
    };
    if ((varclient_1531 < int1)) {
        varclient_1531 = (varclient_1531 + 1);
    };
    script4542(varclient_1531, comp(102, 58), comp(102, 63));
    return;
}