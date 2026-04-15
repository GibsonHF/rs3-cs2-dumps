//
function script20629(int0: int): void {
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
    if ((varclient_8376 == int0)) {
        script20631(0);
        return;
    };
    varclient_8376 = int0;
    script20631(0);
    IF_SETSCROLLPOS(0, 0, comp(1498, 2));
    script20630(varclient_8376);
    script20624(varclient_8376);
    return;
}