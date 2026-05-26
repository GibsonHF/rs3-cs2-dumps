//
function script11133(): void {
    var int0 = SCALE((varbitplayer_27375 - 500), 500, 8096);
    if ((int0 < 0)) {
        int0 = (int0 + 65536);
    };
    IF_SET2DANGLE(int0, 104857602);
    IF_SET2DANGLE(int0, 104857603);
    IF_SET2DANGLE(int0, 104857604);
    IF_SET2DANGLE(int0, 104857605);
    IF_SET2DANGLE(int0, 104857606);
    SOUND_VORBIS_RATE(10758, 1, 0, 80, 512);
    return;
}