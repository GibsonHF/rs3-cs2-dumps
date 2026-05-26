//
function script2232(): void {
    if (((varclient_1127 < 15) && (script2240() < varclient_1135))) {
        SOUND_SYNTH(30240, 1, 0);
        varclient_1131 = (varclient_1131 + 1);
    } else {
        varplayer_2959 = 1;
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 255);
    };
    script2220();
    return;
}