//
function script16258(): void {
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59888 as vorbis, 1, 0, 170, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59889 as vorbis, 1, 0, 170, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59890 as vorbis, 1, 0, 170, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59891 as vorbis, 1, 0, 170, 15, 15));
            break;
        }
    };
    return;
}