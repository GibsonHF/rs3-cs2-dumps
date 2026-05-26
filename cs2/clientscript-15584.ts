//
function script15584(): void {
    SOUND_VORBIS_VOLUME(49696 as vorbis, 1, 0, 255);
    if (((varbitplayer_25406 == 1) && (varbitplayer_56619 == 0))) {
        varbitplayer_56619 = 1;
    } else {
        varbitplayer_49039 = varbitplayer_25406;
        IF_SETHIDE(true, comp(1420, 186));
    };
    script15585();
    return;
}