//
function script18042(int0: number): void {
    if ((varplayer_11339 != script17853())) {
        script1296("You're unable gain any progress in prior Hero Passes. You're only able to claim previously unlocked rewards.");
        IF_SETHIDE(1, int0);
        return;
    };
    IF_SETHIDE(0, int0);
    SOUND_VORBIS_VOLUME(56683, 1, 0, 180);
    return;
}