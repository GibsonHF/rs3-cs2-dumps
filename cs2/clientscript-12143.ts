//
function script12143(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(1, 111935583);
        IF_SETHIDE(0, 111935584);
        IF_SETMODELANIM(27991, 111935584);
        SOUND_VORBIS_RATE(12225, 1, 0, 240, 350);
    } else {
        IF_SETMODELANIM(27992, 111935583);
        SOUND_VORBIS_RATE(12230, 1, 0, 240, 270);
    };
    IF_SETONTIMER(callback(), 111935543);
    return;
}