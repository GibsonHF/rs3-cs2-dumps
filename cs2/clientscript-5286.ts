//
function script5286(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7536, 1, 0, 200, 20, 20));
    if ((IF_GETHIDE(36372494) == 1)) {
        IF_SETHIDE(0, 36372494);
        IF_SETHIDE(1, 36372495);
    } else {
        IF_SETHIDE(0, 36372495);
        IF_SETHIDE(1, 36372494);
    };
    return;
}