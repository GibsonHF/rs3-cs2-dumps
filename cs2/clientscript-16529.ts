//
function script16529(int0: number): void {
    IF_SETMODELANIM(32037, int0);
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54222, 1, 0, 50, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54223, 1, 0, 50, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54224, 1, 0, 50, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54225, 1, 0, 50, 20, 20));
            break;
        }
    };
    return;
}