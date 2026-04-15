//
function script9381(int0: unknown_int, int1: int): void {
    IF_SETPOSITION((4 + (int1 * 120)), 0, 0, 0, comp(702, 92));
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 120);
    switch (int1) {
        case 0:
        case 1: {
            IF_SETHIDE(false, comp(702, 83));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(702, 79));
            IF_SETHIDE(false, comp(702, 65));
            IF_SETHIDE(true, comp(702, 54));
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(702, 79));
            IF_SETHIDE(true, comp(702, 65));
            IF_SETHIDE(false, comp(702, 54));
            if ((varbitplayer_21122 == 0)) {
                IF_SETTEXT("Enable PvP", comp(702, 10));
            } else {
                IF_SETTEXT("Disable PvP", comp(702, 10));
            };
            break;
        }
    };
    return;
}