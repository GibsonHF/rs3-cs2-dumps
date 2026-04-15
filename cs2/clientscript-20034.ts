//
function script20034(int0: unknown_int, int1: unknown_int): void {
    if ((int0 == 1)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36969 as vorbis, 1, 0, 125, 10, 10));
        stack(16593);
        stack(int1);
        IF_SETGRAPHIC();
    } else {
        stack(16486);
        stack(int1);
        IF_SETGRAPHIC();
    };
    return;
}