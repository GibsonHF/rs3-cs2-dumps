//
function script12143(int0: unknown_int, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1708, 95));
        IF_SETHIDE(false, comp(1708, 96));
        IF_SETMODELANIM(27991 as seq, comp(1708, 96));
        SOUND_VORBIS_RATE(12225 as vorbis, 1, 0, 240, 350);
    } else {
        IF_SETMODELANIM(27992 as seq, comp(1708, 95));
        SOUND_VORBIS_RATE(12230 as vorbis, 1, 0, 240, 270);
    };
    IF_SETONTIMER(callback(), comp(1708, 55));
    return;
}