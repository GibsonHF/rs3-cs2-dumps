//
function script7088(int0: component, int1: int, int2: graphic): void {
    var int3 = -1 as vorbis;
    if ((CC_FIND(int0, int1) == 1)) {
        switch (RANDOM(5)) {
            case 0: {
                int3 = 21239 as vorbis;
                break;
            }
            case 1: {
                int3 = 21231 as vorbis;
                break;
            }
            case 2: {
                int3 = 21241 as vorbis;
                break;
            }
            case 3: {
                int3 = 21246 as vorbis;
                break;
            }
            case 4: {
                int3 = 21244 as vorbis;
                break;
            }
        };
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int3, 1, 0, 20, 5, 10));
        CC_SETGRAPHIC(int2);
    };
    return;
}