//
function script6853(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    [int1, int2] = script6855(int0);
    stack(int1);
    stack(int2);
    IF_SETGRAPHIC();
    if (((varbitplayer_9429 == 35) && (int0 == 4))) {
        IF_SETHIDE(false, comp(1354, 40));
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 57) && (int0 == 7))) {
        IF_SETHIDE(false, comp(1354, 38));
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 67) && (int0 == 10))) {
        IF_SETHIDE(false, comp(1354, 39));
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 92) && (int0 == 13))) {
        IF_SETHIDE(false, comp(1354, 41));
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    return;
}