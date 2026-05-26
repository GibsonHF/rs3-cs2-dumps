//
function script7142(int0: number, int1: number): void {
    var int2 = -1;
    switch (RANDOM(5)) {
        case 0: {
            int2 = 21239;
            break;
        }
        case 1: {
            int2 = 21231;
            break;
        }
        case 2: {
            int2 = 21241;
            break;
        }
        case 3: {
            int2 = 21246;
            break;
        }
        case 4: {
            int2 = 21244;
            break;
        }
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int2, 1, 0, 20, 5, 10));
    if ((CC_FIND(89849878, int0) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    return;
}