//
function script16196(): void {
    var int0 = script6430(IF_GETHIDE(comp(1253, 467)));
    if ((((script17333() == 1) || (IF_GETENABLED(82116674) == 0)) || ((script16199(82116674) == 1) && (int0 == false)))) {
        return;
    };
    if (((script18808() == 1) && (varbitplayer_58043 == 0))) {
        script1296("Please select a promotion before viewing probabilities.");
        return;
    };
    if (((int0 == false) && (script19674() == 0))) {
        return;
    };
    if ((int0 == false)) {
        script16185(comp(1253, 474), comp(1253, 475), comp(1253, 473), comp(1253, 476));
    };
    if ((script18808() == 1)) {
        if ((varbitplayer_58043 != 0)) {
        } else {
        };
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961 as vorbis, 1, 0, 160, 15, 15));
    IF_SETHIDE(int0, comp(1253, 467));
    script16198(int0, 82116674);
    return;
}