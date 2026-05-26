//
function script2774(int0: number): void {
    SOUND_VORBIS_VOLUME(10046, 1, 0, 255);
    IF_SETCOLOUR(16776960, int0);
    IF_SETONTIMER(callback(script2775, (CLIENTCLOCK() + 15), -2147483645), int0);
    return;
}