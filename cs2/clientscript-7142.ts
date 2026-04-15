//
function script7142(int0: int, int1: graphic): void {
    var int2 = -1 as vorbis;
    switch (RANDOM(5)) {
        case 0: {
            int2 = 21239 as vorbis;
            break;
        }
        case 1: {
            int2 = 21231 as vorbis;
            break;
        }
        case 2: {
            int2 = 21241 as vorbis;
            break;
        }
        case 3: {
            int2 = 21246 as vorbis;
            break;
        }
        case 4: {
            int2 = 21244 as vorbis;
            break;
        }
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int2, 1, 0, 20, 5, 10));
    if ((CC_FIND(comp(1371, 22), int0) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    return;
}