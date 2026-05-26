//
function script5281(): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(7536, 1, 0, 200, 20, 20));
    if ((IF_GETGRAPHIC(74776576) == 7700)) {
        stack(7701);
        stack(74776576);
        IF_SETGRAPHIC();
    } else {
        stack(7700);
        stack(74776576);
        IF_SETGRAPHIC();
    };
    return;
}