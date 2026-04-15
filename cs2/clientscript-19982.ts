//
function script19982(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void {
    switch (int1) {
        case 0: {
            switch (RANDOM(4)) {
                case 0: {
                    unk11071(RANDOM_SOUND_PITCH(57858 as vorbis, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 1: {
                    unk11071(RANDOM_SOUND_PITCH(57859 as vorbis, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 2: {
                    unk11071(RANDOM_SOUND_PITCH(57860 as vorbis, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 3: {
                    unk11071(RANDOM_SOUND_PITCH(57861 as vorbis, 1, 0, 200, 10, 10), 0);
                    break;
                }
            };
            break;
        }
        case 76: {
            unk11071(RANDOM_SOUND_PITCH(57864 as vorbis, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 74: {
            unk11071(RANDOM_SOUND_PITCH(57862 as vorbis, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 77: {
            unk11071(RANDOM_SOUND_PITCH(57867 as vorbis, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 75: {
            unk11071(RANDOM_SOUND_PITCH(57863 as vorbis, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 81: {
            unk11071(RANDOM_SOUND_PITCH(57911 as vorbis, 1, 0, 200, 10, 10), 0);
            break;
        }
    };
    unk11070(0);
    IF_SETONTIMER(callback(script19741, int0, int1, int2, int3, int4), int0);
    return;
}