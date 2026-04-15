//
function script3133(int0: unknown_int): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((int0 == 0)) {
        if ((IF_SET2DANGLE() == 1)) {
            script15660();
        } else {
            QUIT();
        };
    } else {
        script7879();
    };
    return;
}