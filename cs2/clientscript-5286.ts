//
function script5286(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7536 as vorbis, 1, 0, 200, 20, 20));
    if ((IF_GETHIDE(comp(555, 14)) == true)) {
        IF_SETHIDE(false, comp(555, 14));
        IF_SETHIDE(true, comp(555, 15));
    } else {
        IF_SETHIDE(false, comp(555, 15));
        IF_SETHIDE(true, comp(555, 14));
    };
    return;
}