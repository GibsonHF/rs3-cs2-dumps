//
function script2755(): void {
    if ((script15532(0) == 0)) {
        if ((varbitclient_21816 == 1)) {
            varbitclient_21816 = 0;
        } else {
            varbitclient_21816 = 1;
        };
        varbitclient_42113 = varbitclient_21816;
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        script8144();
    } else {
        script12724("You can't do that during the tutorial.", 2, 1);
    };
    return;
}