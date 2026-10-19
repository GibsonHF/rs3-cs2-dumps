//
function script21158(): void {
    switch (RANDOM(2)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(56693 as vorbis, 1, 0, 200, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(56694 as vorbis, 1, 0, 200, 15, 15));
            break;
        }
    };
    return;
}