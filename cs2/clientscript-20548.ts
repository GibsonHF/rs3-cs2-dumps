//
function script20548(): void {
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59073, 1, 0, 150, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59074, 1, 0, 150, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59075, 1, 0, 150, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59076, 1, 0, 150, 15, 15));
            break;
        }
    };
    IF_SETHIDE(1, 54263816);
    return;
}