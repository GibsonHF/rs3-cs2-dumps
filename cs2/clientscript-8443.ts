//
function script8443(int0: component): cs2enum {
    var int1 = -1 as cs2enum;
    var int2 = 0;
    var int3 = 0;
    switch (int0) {
        case 95027203: {
            int2 = 1;
            int3 = varbitplayer_18786;
            break;
        }
        case 95682561: {
            int2 = 1;
            int3 = varbitplayer_18787;
            break;
        }
        case 95420417: {
            int2 = 2;
            int3 = varbitplayer_18788;
            break;
        }
        case 95158273: {
            int2 = 2;
            int3 = varbitplayer_18789;
            break;
        }
        case 95617025: {
            int2 = 3;
            int3 = varbitplayer_18790;
            break;
        }
        case 95748097: {
            int2 = 3;
            int3 = varbitplayer_18791;
            break;
        }
        case 123469825:
        case 25952257: {
            int2 = 8;
            break;
        }
        case 123535361:
        case 27525121: {
            int2 = 9;
            break;
        }
        case 123666433:
        case 31653889: {
            int2 = 10;
            break;
        }
        case 123600897:
        case 31588353: {
            int2 = 11;
            break;
        }
        case 79101953: {
            int2 = 4;
            int3 = varbitplayer_53123;
            break;
        }
        case 79888385: {
            int2 = 4;
            int3 = varbitplayer_53124;
            break;
        }
        case 79953921:
        case 79364097: {
            int2 = 14;
            break;
        }
        case 80019457:
        case 79560705: {
            int2 = 15;
            break;
        }
        case 123207681: {
            int2 = 5;
            int3 = varbitplayer_36453;
            break;
        }
        case 123404289: {
            int2 = 5;
            int3 = varbitplayer_36454;
            break;
        }
        case 94961665:
        case 23789569: {
            int2 = 12;
            break;
        }
        case 123338753:
        case 19464193: {
            int2 = 13;
            break;
        }
        case 95485968:
        case 95551528: {
            if ((varbitplayer_16789 == 1)) {
                return 6760 as cs2enum;
            };
            return 6759 as cs2enum;
        }
    };
    int3 = MAX(int3, 0);
    int1 = script8437(int2, int3);
    return int1;
}