//
function script2389(): void {
    var int0 = (10 - varbitplayer_38898);
    var int1 = (25486 + SCALE(14563, 10, int0));
    if ((IF_GET2DANGLE(103088131) < int1)) {
        IF_SET2DANGLE((IF_GET2DANGLE(103088131) + 200), 103088131);
    } else if ((IF_GET2DANGLE(103088131) > int1)) {
        IF_SET2DANGLE((IF_GET2DANGLE(103088131) - 200), 103088131);
    };
    switch (varbitplayer_38898) {
        case 0:
        case 10: {
            IF_SETCOLOUR(16711680, 103088137);
            SOUND_VORBIS_RATE(4175, 1, 0, 30, 300);
            break;
        }
        case 1:
        case 9: {
            IF_SETCOLOUR(16730880, 103088137);
            SOUND_VORBIS_RATE(4175, 1, 0, 25, 280);
            break;
        }
        case 2:
        case 8: {
            IF_SETCOLOUR(16750080, 103088137);
            SOUND_VORBIS_RATE(4175, 1, 0, 20, 265);
            break;
        }
        case 3:
        case 7: {
            IF_SETCOLOUR(13145600, 103088137);
            SOUND_VORBIS_RATE(4175, 1, 0, 15, 256);
            break;
        }
        case 4:
        case 6: {
            IF_SETCOLOUR(9881600, 103088137);
            SOUND_VORBIS_RATE(4175, 1, 0, 10, 250);
            break;
        }
        case 5: {
            IF_SETCOLOUR(6618980, 103088137);
            break;
        }
    };
    return;
}