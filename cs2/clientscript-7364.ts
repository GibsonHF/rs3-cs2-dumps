//
function script7364(): void {
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    if ((IF_GETHIDE(comp(1379, 80)) == false)) {
        IF_SETHIDE(true, comp(1379, 80));
        IF_SETHIDE(false, comp(1379, 75));
    } else {
        IF_SETHIDE(true, comp(1379, 75));
        IF_SETHIDE(false, comp(1379, 80));
    };
    script7367();
    return;
}