//
function script16973(): void {
    IF_SETMODELANIM(22645 as seq, comp(1068, 24));
    switch (RANDOM(3)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48331 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48332 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(48333 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
    };
    return;
}