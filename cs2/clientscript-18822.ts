//
function script18822(): void {
    IF_SETHIDE(true, comp(488, 64));  // trh184_overlay:splash_screen
    SOUND_VORBIS_VOLUME(36960 as vorbis, 1, 0, 180);
    IF_SETHIDE(false, comp(488, 0));  // trh184_overlay:universe
    script16198(1, 31981632);
    return;
}