//
function script20196(int0: number): void {
    var int1 = enum_getvalue(9, 0, 9079 as cs2enum, int0);
    if ((int1 != -1)) {
        varbitplayer_58391 = int1;
        varclient_8474 = 1;
        stack(varbitplayer_58391);
        script15039();
        varclient_8475 = [];
        script21053();
        SOUND_VORBIS_VOLUME(59071 as vorbis, 1, 0, 180);
    };
    return;
}