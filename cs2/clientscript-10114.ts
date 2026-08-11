//
function script10114(): void {
    var int0 = 0;
    if ((varbitclient_23075 == 0)) {
        CC_DELETEALL(comp(232, 8));  // toplevel_v2_parent_suboverlay_twitch:build_layer
        int0 = TTV_LIVESTREAMS_UPDATE();
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    } else {
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return;
    };
    return;
}