//
function script5284(): void {
    if ((IF_GETY(comp(555, 14)) > -86)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7557 as vorbis, 1, 0, 200, 20, 20));
        IF_SETPOSITION(IF_GETX(comp(555, 14)), (IF_GETY(comp(555, 14)) - 10), 0, 0, comp(555, 14));
        IF_SETPOSITION(IF_GETX(comp(555, 15)), (IF_GETY(comp(555, 15)) - 10), 0, 0, comp(555, 15));
    };
    return;
}