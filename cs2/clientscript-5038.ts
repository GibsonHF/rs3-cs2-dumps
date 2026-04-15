//
function script5038(int0: unknown_int): void {
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 200);
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1111, 6));
        IF_SETHIDE(false, comp(1111, 1));
    } else {
        IF_SETHIDE(false, comp(1111, 6));
        IF_SETHIDE(true, comp(1111, 1));
    };
    return;
}