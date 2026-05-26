//
function script19982(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    switch (int1) {
        case 0: {
            switch (RANDOM(4)) {
                case 0: {
                    unk11070(RANDOM_SOUND_PITCH(57858, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 1: {
                    unk11070(RANDOM_SOUND_PITCH(57859, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 2: {
                    unk11070(RANDOM_SOUND_PITCH(57860, 1, 0, 200, 10, 10), 0);
                    break;
                }
                case 3: {
                    unk11070(RANDOM_SOUND_PITCH(57861, 1, 0, 200, 10, 10), 0);
                    break;
                }
            };
            break;
        }
        case 76: {
            unk11070(RANDOM_SOUND_PITCH(57864, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 74: {
            unk11070(RANDOM_SOUND_PITCH(57862, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 77: {
            unk11070(RANDOM_SOUND_PITCH(57867, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 75: {
            unk11070(RANDOM_SOUND_PITCH(57863, 1, 0, 200, 10, 10), 0);
            break;
        }
        case 81: {
            unk11070(RANDOM_SOUND_PITCH(57911, 1, 0, 200, 10, 10), 0);
            break;
        }
    };
    unk11069(0);
    IF_SETONTIMER(callback(script19741, int0, int1, int2, int3, int4), int0);
    return;
}