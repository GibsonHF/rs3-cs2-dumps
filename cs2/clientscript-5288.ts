//
function script5288(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7513, 1, 0, 200, 20, 20));
    if ((IF_GET2DANGLE(36372494) == 0)) {
        IF_SET2DANGLE(49152, 36372495);
        IF_SET2DANGLE(49152, 36372494);
        return;
    };
    if ((IF_GET2DANGLE(36372494) == 49152)) {
        IF_SET2DANGLE(32768, 36372495);
        IF_SET2DANGLE(32768, 36372494);
        return;
    };
    if ((IF_GET2DANGLE(36372494) == 32768)) {
        IF_SET2DANGLE(16384, 36372495);
        IF_SET2DANGLE(16384, 36372494);
        return;
    };
    if ((IF_GET2DANGLE(36372494) == 16384)) {
        IF_SET2DANGLE(0, 36372495);
        IF_SET2DANGLE(0, 36372494);
        return;
    };
    return;
}