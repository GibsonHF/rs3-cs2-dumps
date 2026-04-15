//
function script16529(int0: component): void {
    IF_SETMODELANIM(32037 as seq, int0);
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54222 as vorbis, 1, 0, 50, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54223 as vorbis, 1, 0, 50, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54224 as vorbis, 1, 0, 50, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(54225 as vorbis, 1, 0, 50, 20, 20));
            break;
        }
    };
    return;
}