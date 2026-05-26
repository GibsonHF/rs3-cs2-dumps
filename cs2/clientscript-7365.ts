//
function script7365(): void {
    SOUND_VORBIS_RATE(6185, 1, 0, 100, 350);
    if ((IF_GETHIDE(90374224) == 0)) {
        IF_SETHIDE(1, 90374224);
        IF_SETHIDE(0, 90374219);
    } else {
        IF_SETHIDE(1, 90374219);
        IF_SETHIDE(0, 90374224);
    };
    script7367();
    return;
}