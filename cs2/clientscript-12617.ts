//
function script12617(int0: number, int1: number): void {
    if ((int1 < 100)) {
        var int1 = (int1 + 1);
        IF_SETONTIMER(callback(script12617, int0, int1), int0);
        return;
    };
    IF_SETHIDE(0, 116260869);
    SOUND_VORBIS_VOLUME(15172, 1, 0, 255);
    IF_SETONTIMER(callback(), int0);
    return;
}