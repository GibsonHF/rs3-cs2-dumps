//
function script2236(): void {
    if (((varclient_1135 < 15) && (((varplayer_2961 + varplayer_2962) + varplayer_2960) > 1))) {
        SOUND_SYNTH(30240, 1, 0);
        varclient_1135 = (varclient_1135 + 1);
    } else {
        varplayer_2959 = 2;
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 255);
    };
    script2220();
    return;
}