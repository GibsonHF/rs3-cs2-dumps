//
function script8129(int0: unknown_int): void {
    if ((script15532(0) == 1)) {
        return;
    };
    if ((varplayer_462 == 1)) {
        if ((varbitplayer_30336 > 0)) {
            return;
        };
        varplayer_462 = 0;
    } else {
        varplayer_462 = 1;
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    script8131(int0);
    script9877();
    return;
}