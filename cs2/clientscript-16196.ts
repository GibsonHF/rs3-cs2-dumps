//
function script16196(): void {
    var int0 = script6430(IF_GETHIDE(82117075));
    if ((((script17333() == 1) || (IF_GETENABLED(82116674) == 0)) || ((script16199(82116674) == 1) && (int0 == 0)))) {
        return;
    };
    if (((script18808() == 1) && (varbitplayer_58043 == 0))) {
        script1296("Please select a promotion before viewing probabilities.");
        return;
    };
    if (((int0 == 0) && (script19674() == 0))) {
        return;
    };
    if ((int0 == 0)) {
        script16185(82117082, 82117083, 82117081, 82117084);
    };
    if ((script18808() == 1)) {
        if ((varbitplayer_58043 != 0)) {
        } else {
        };
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961, 1, 0, 160, 15, 15));
    IF_SETHIDE(int0, 82117075);
    script16198(int0, 82116674);
    return;
}