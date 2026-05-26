//
function script16973(): void {
    IF_SETMODELANIM(22645, 69992472);
    switch (RANDOM(3)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48331, 1, 0, 80, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48332, 1, 0, 80, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48333, 1, 0, 80, 20, 20));
            break;
        }
    };
    return;
}