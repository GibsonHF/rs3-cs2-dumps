//
function script11133(): void {
    var int0 = SCALE((varbitplayer_27375 - 500), 500, 8096);
    if ((int0 < 0)) {
        int0 = (int0 + 65536);
    };
    IF_SET2DANGLE(int0, comp(1600, 2));
    IF_SET2DANGLE(int0, comp(1600, 3));
    IF_SET2DANGLE(int0, comp(1600, 4));
    IF_SET2DANGLE(int0, comp(1600, 5));
    IF_SET2DANGLE(int0, comp(1600, 6));
    SOUND_VORBIS_RATE(10758 as vorbis, 1, 0, 80, 512);
    return;
}