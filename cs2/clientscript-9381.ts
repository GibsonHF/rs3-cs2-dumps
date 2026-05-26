//
function script9381(int0: number, int1: number): void {
    IF_SETPOSITION((4 + (int1 * 120)), 0, 0, 0, 46006364);
    SOUND_VORBIS_VOLUME(36972, 1, 0, 120);
    switch (int1) {
        case 0:
        case 1: {
            IF_SETHIDE(0, 46006355);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 46006351);
            IF_SETHIDE(0, 46006337);
            IF_SETHIDE(1, 46006326);
            break;
        }
        case 3: {
            IF_SETHIDE(1, 46006351);
            IF_SETHIDE(1, 46006337);
            IF_SETHIDE(0, 46006326);
            if ((varbitplayer_21122 == 0)) {
                IF_SETTEXT("Enable PvP", 46006282);
            } else {
                IF_SETTEXT("Disable PvP", 46006282);
            };
            break;
        }
    };
    return;
}