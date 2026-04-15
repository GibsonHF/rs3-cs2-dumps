//
function script18042(int0: component): void {
    if ((varplayer_11339 != script17853())) {
        script1296("You're unable gain any progress in prior Hero Passes. You're only able to claim previously unlocked rewards.");
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    SOUND_VORBIS_VOLUME(56683 as vorbis, 1, 0, 180);
    return;
}