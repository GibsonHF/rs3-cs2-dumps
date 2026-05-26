//
function script11745(): void {
    varplayer_5825 = (256 - (varbitplayer_25951 / 2));
    if ((SCALE(varbitplayer_25951, 10, 100) < 50)) {
        varplayer_5825 = 256;
    };
    if ((varplayer_5826 == true)) {
        varplayer_5825 = (varplayer_5825 * 2);
    };
    if ((varplayer_5827 == true)) {
        SOUND_VORBIS_RATE(538, 1, 0, 120, (varplayer_5825 + 10));
    };
    SOUND_VORBIS_RATE(script5925(9432), 1, 0, 145, 255);
    SOUND_VORBIS_RATE(script5925(9433), 1, 9, 140, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9434), 1, 19, 135, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9435), 1, 28, 130, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9436), 1, 38, 125, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9437), 1, 47, 120, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9438), 1, 56, 115, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9439), 1, 66, 110, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9440), 1, 75, 105, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9441), 1, 84, 105, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9442), 1, 94, 110, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9443), 1, 103, 115, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9444), 1, 113, 120, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9445), 1, 122, 125, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9446), 1, 131, 130, varplayer_5825);
    SOUND_VORBIS_RATE(script5925(9447), 1, 141, 135, varplayer_5825);
    return;
}