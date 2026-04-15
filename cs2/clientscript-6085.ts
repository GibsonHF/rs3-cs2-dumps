//
function script6085(int0: int): void {
    SOUND_VORBIS_VOLUME(14378 as vorbis, 1, 0, 120);
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1265, 40));
        IF_SETHIDE(true, comp(1265, 31));
    } else {
        IF_SETHIDE(true, comp(1265, 40));
        IF_SETHIDE(false, comp(1265, 31));
    };
    script6087(varplayer_304, varplayer_305, int0, varbitplayer_987);
    return;
}