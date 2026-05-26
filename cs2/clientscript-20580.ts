//
function script20580(): void {
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59073 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59074 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59075 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59076 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
    };
    varplayer_12583 = 0;
    varplayer_12584 = 0;
    return;
}