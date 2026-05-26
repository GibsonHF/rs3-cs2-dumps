//
function script5287(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7513 as vorbis, 1, 0, 200, 20, 20));
    if ((IF_GET2DANGLE(comp(555, 14)) == 32768)) {
        IF_SET2DANGLE(49152, comp(555, 15));
        IF_SET2DANGLE(49152, comp(555, 14));
        return;
    };
    if ((IF_GET2DANGLE(comp(555, 14)) == 16384)) {
        IF_SET2DANGLE(32768, comp(555, 15));
        IF_SET2DANGLE(32768, comp(555, 14));
        return;
    };
    if ((IF_GET2DANGLE(comp(555, 14)) == 0)) {
        IF_SET2DANGLE(16384, comp(555, 15));
        IF_SET2DANGLE(16384, comp(555, 14));
        return;
    };
    if ((IF_GET2DANGLE(comp(555, 14)) == 49152)) {
        IF_SET2DANGLE(0, comp(555, 15));
        IF_SET2DANGLE(0, comp(555, 14));
        return;
    };
    return;
}