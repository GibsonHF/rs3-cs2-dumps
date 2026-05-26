//
function script20034(int0: number, int1: number): void {
    if ((int0 == 1)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36969, 1, 0, 125, 10, 10));
        IF_SETGRAPHIC(16593, int1);
    } else {
        IF_SETGRAPHIC(16486, int1);
    };
    return;
}