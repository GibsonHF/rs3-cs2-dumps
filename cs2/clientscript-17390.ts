//
function script17390(long0: long): void {
    if ((varplayer_135 == -1 as obj)) {
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 120);
        return;
    };
    varclient_85 = MAX_LONG(1n, SUB_LONG(varclient_85, long0));
    script15038(varclient_84, varclient_85, 1);
    return;
}