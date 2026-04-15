//
function script20552(int0: int): void {
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
    if ((varclient_8375 == int0)) {
        script20550(0);
        return;
    };
    varclient_8375 = int0;
    script20550(0);
    script72(comp(853, 4), comp(853, 6), 0);
    script20553();
    script20624(varclient_8375);
    return;
}