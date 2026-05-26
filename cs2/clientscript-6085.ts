//
function script6085(int0: number): void {
    SOUND_VORBIS_VOLUME(14378, 1, 0, 120);
    if ((int0 == 0)) {
        IF_SETHIDE(0, 82903080);
        IF_SETHIDE(1, 82903071);
    } else {
        IF_SETHIDE(1, 82903080);
        IF_SETHIDE(0, 82903071);
    };
    script6087(varplayer_304, varplayer_305, int0, varbitplayer_987);
    return;
}