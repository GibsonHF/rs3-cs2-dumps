//
function script5282(): void {
    if ((IF_GETX(comp(555, 14)) > 29)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7557 as vorbis, 1, 0, 200, 20, 20));
        IF_SETPOSITION((IF_GETX(comp(555, 14)) - 10), IF_GETY(comp(555, 14)), 0, 0, comp(555, 14));
        IF_SETPOSITION((IF_GETX(comp(555, 15)) - 10), IF_GETY(comp(555, 15)), 0, 0, comp(555, 15));
    };
    return;
}