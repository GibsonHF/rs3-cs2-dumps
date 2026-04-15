//
function script17845(int0: struct, int1: int): void {
    switch (int0) {
        case 40705: {
            varbitplayer_47439 = int1;
            break;
        }
        case 40704: {
            varbitplayer_47440 = int1;
            break;
        }
        case 40706: {
            varbitplayer_35379 = int1;
            break;
        }
        case 34335: {
            varbitplayer_35406 = int1;
            break;
        }
        case 6840: {
            varbitplayer_37053 = int1;
            break;
        }
        case 37718: {
            varbitplayer_37054 = int1;
            break;
        }
        case 48538: {
            varbitplayer_54110 = int1;
            break;
        }
        case 48910: {
            varbitplayer_54644 = int1;
            break;
        }
        case 49798: {
            varbitplayer_55474 = int1;
            break;
        }
        case 49799: {
            varbitplayer_55475 = int1;
            break;
        }
        case 47447:
        case 47448:
        case 47449:
        case 47985:
        case 48315:
        case 48316: {
            varbitplayer_55086 = MIN(511, int1);
            break;
        }
        case 48317:
        case 48318:
        case 48319:
        case 48320:
        case 48321: {
            varbitplayer_55088 = MIN(511, int1);
            break;
        }
        case 48322:
        case 48323:
        case 48477:
        case 48481:
        case 48482:
        case 48505:
        case 48506:
        case 48507: {
            varbitplayer_55090 = MIN(511, int1);
            break;
        }
        case 48508:
        case 48779:
        case 48780:
        case 48781: {
            varbitplayer_55092 = MIN(511, int1);
            break;
        }
        default: {
            script12478(`No daily purchase cap var for ${struct_getparam(int0, 4849)}.`);
            break;
        }
    };
    return;
}