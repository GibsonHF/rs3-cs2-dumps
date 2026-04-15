//
function script8167(int0: component, int1: int): void {
    script8059(1);
    if ((CC_FIND(int0, int1) == 1)) {
        IF_OPENSUBCLIENT(comp(1477, 817), 1478);
        if ((HAS_NXT() == 1)) {
            script8169(0, 29, false);
        } else {
            script8169(0, 29, true);
        };
        script115();
        if ((varbitplayer_19925 == 1)) {
            SOUND_VORBIS_VOLUME(36965 as vorbis, 1, 15, 120);
            IF_SETONTIMER(callback(script8168, -2147483645, 29, 28), 96862209);
            IF_SETSIZE(0, 0, 1, 1, script8170(29));
            if ((HAS_NXT() == 0)) {
                script8169(19, 29, false);
            };
        } else {
            SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 10, 120);
            IF_SETONTIMER(callback(script8168, -2147483645, 0, 1), 96862209);
            IF_SETSIZE(0, 0, 1, 1, script8170(0));
            if ((HAS_NXT() == 0)) {
                script8169(0, 10, false);
            };
        };
        CC_SETOP(1, "");
        CC_SETONOP(callback());
    };
    return;
}