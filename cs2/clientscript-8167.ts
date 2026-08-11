//
function script8167(int0: number, int1: number): void {
    script8059(1);
    if ((CC_FIND(int0, int1) == 1)) {
        IF_OPENSUBCLIENT(comp(1477, 818), 1478);  // toplevel_v2:state_change_notifications
        script8169(0, 29, 0);
        script115();
        if ((varbitplayer_19925 == 1)) {
            SOUND_VORBIS_VOLUME(36965 as vorbis, 1, 15, 120);
            IF_SETONTIMER(callback(script8168, -2147483645, 29, 28), comp(1478, 1));  // toplevel_v2_lock_notification:animation_layer
            IF_SETSIZE(0, 0, 1, 1, script8170(29));
        } else {
            SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 10, 120);
            IF_SETONTIMER(callback(script8168, -2147483645, 0, 1), comp(1478, 1));  // toplevel_v2_lock_notification:animation_layer
            IF_SETSIZE(0, 0, 1, 1, script8170(0));
        };
        CC_SETOP(callback(script1));
        CC_SETONOP(callback());
    };
    return;
}