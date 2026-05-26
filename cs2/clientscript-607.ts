//
function script607(): void {
    if ((varplayer_135 == -1 as obj)) {
        varclient_85 = 1n;
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 120);
        return;
    };
    varclient_85 = MAX_LONG(1n, varplayer_140);
    script15038(varclient_84, varclient_85, 1);
    return;
}