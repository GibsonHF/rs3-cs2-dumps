//
function script5926(int0: component, int1: seq, string0: unknown_string): void {
    IF_SETMODELANIM(int1, int0);
    switch (RANDOM(5)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43547 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43559 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43544 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43557 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43546 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
    };
    return;
}