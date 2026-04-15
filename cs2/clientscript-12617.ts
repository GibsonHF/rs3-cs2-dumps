//
function script12617(int0: component, int1: int): void {
    if ((int1 < 100)) {
        var int1 = (int1 + 1);
        IF_SETONTIMER(callback(script12617, int0, int1), int0);
        return;
    };
    IF_SETHIDE(false, comp(1774, 5));
    SOUND_VORBIS_VOLUME(15172 as vorbis, 1, 0, 255);
    IF_SETONTIMER(callback(), int0);
    return;
}