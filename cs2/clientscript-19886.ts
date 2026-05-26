//
function script19886(int0: number, int1: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, int1);
    } else {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36969 as vorbis, 1, 0, 125, 10, 10));
        IF_SETHIDE(false, int1);
    };
    return;
}