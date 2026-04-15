//
function script5373(int0: component, int1: int): void {
    if ((int1 == -1)) {
        SOUND_VORBIS_VOLUME(7715 as vorbis, 45, 0, 100);
        IF_SETONTIMER(callback(script5369, int0), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
        if ((int1 == -2)) {
            IF_SETTEXT("-", int0);
        } else {
            IF_SETTEXT(inttostring(int1, 10), int0);
        };
    };
    return;
}