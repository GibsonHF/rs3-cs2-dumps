//
function script16197(): void {
    if ((script16199(82116668) == 1)) {
        return;
    };
    var int0 = script6430(IF_GETHIDE(comp(1253, 477)));  // wheel_of_fortune:options_window
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961 as vorbis, 1, 0, 160, 15, 15));
    IF_SETHIDE(int0, comp(1253, 477));  // wheel_of_fortune:options_window
    script16198(int0, 82116668);
    return;
}