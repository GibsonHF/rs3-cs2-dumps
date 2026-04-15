//
function script7893(int0: unknown_int): void {
    var int1 = 0;
    switch (int0) {
        case 93061211: {
            int1 = 0;
            break;
        }
        case 93061207: {
            int1 = 1;
            break;
        }
        case 93061203: {
            int1 = 2;
            break;
        }
        case 93061199: {
            int1 = 3;
            break;
        }
        case 93061195: {
            int1 = 4;
            break;
        }
        case 93061191: {
            int1 = 5;
            if ((varclient_3687 == 1)) {
                if ((varclient_3482 == 5)) {
                    int1 = 1;
                } else {
                    int1 = varclient_3482;
                };
            };
            break;
        }
        default: {
            return;
        }
    };
    SOUND_VORBIS_RATE(36969 as vorbis, 1, 0, 150, 220);
    script7894(int1, 1);
    return;
}