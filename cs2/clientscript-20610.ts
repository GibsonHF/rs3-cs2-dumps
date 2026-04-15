//
function script20610(int0: unknown_int): void {
    if ((int0 == 1)) {
        switch (RANDOM(6)) {
            case 0: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59067 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
            case 1: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59068 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
            case 2: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59069 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
            case 3: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59070 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
            case 4: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59071 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
            case 5: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59072 as vorbis, 1, 0, 150, 15, 15));
                break;
            }
        };
        IF_SETHIDE(false, comp(1495, 38));
        script20625(1);
    } else {
        IF_SETHIDE(false, comp(1495, 38));
        script20625(2);
    };
    return;
}