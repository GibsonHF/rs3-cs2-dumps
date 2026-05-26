//
function script12715(): void {
    var int0 = IF_GETTRANS(comp(1620, 0));
    var int1 = int0;
    if ((varbitclient_33687 == 1)) {
        if ((++int1 < 255)) {
            IF_SETTRANS(int1, comp(1620, 0));
        } else {
            IF_SETONTIMER(callback(), comp(1620, 28));
            varbitclient_33687 = 0;
        };
    } else if ((--int1 > 0)) {
        IF_SETTRANS(int1, comp(1620, 0));
    } else if ((varbitplayer_33689 == 500)) {
        IF_SETONTIMER(callback(), comp(1620, 28));
        varbitclient_33687 = 1;
    } else {
        varbitclient_33687 = 1;
        SOUND_VORBIS_RATE(5613 as vorbis, 1, 0, 80, 512);
    };
    return;
}