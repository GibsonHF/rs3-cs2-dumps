//
function script12125(): void {
    varclient_5116 = (varclient_5116 + 1);
    IF_SETONTIMER(callback(script12127, -2147483645, (CLIENTCLOCK() + 500)), 111935525);
    switch (RANDOM(10)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11874, 1, 0, 125, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11877, 1, 0, 125, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11878, 1, 0, 125, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11882, 1, 0, 125, 20, 20));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11885, 1, 0, 125, 20, 20));
            break;
        }
        case 5: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11887, 1, 0, 125, 20, 20));
            break;
        }
        case 6: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11888, 1, 0, 125, 20, 20));
            break;
        }
        case 7: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11890, 1, 0, 125, 20, 20));
            break;
        }
        case 8: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11891, 1, 0, 125, 20, 20));
            break;
        }
        case 9: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(11876, 1, 0, 125, 20, 20));
            break;
        }
    };
    return;
}