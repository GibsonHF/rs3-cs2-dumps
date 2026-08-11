//
function script6853(int0: number): void {
    var int1 = -1 as graphic;
    var int2 = comp(-1, 65535);
    [int1, int2] = script6855(int0);
    IF_SETGRAPHIC(int1, int2);
    if (((varbitplayer_9429 == 35) && (int0 == 4))) {
        IF_SETHIDE(false, comp(1354, 40));  // ozan2_sundial:het
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 57) && (int0 == 7))) {
        IF_SETHIDE(false, comp(1354, 38));  // ozan2_sundial:apmeken
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 67) && (int0 == 10))) {
        IF_SETHIDE(false, comp(1354, 39));  // ozan2_sundial:crondis
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    if (((varbitplayer_9429 == 92) && (int0 == 13))) {
        IF_SETHIDE(false, comp(1354, 41));  // ozan2_sundial:scabaras
        SOUND_VORBIS_RATE(7176 as vorbis, 1, 0, 200, 220);
    };
    return;
}