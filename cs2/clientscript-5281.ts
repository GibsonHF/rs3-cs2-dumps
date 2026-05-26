//
function script5281(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7536 as vorbis, 1, 0, 200, 20, 20));
    if ((IF_GETGRAPHIC(comp(1141, 0)) == 7700 as graphic)) {
        IF_SETGRAPHIC(7701 as graphic, comp(1141, 0));
    } else {
        IF_SETGRAPHIC(7700 as graphic, comp(1141, 0));
    };
    return;
}