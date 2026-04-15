//
function script12719(int0: struct, int1: int): int {
    if ((script13501(int0) == 0)) {
        return int1;
    };
    var int2 = int1;
    switch (int0) {
        case 45459: {
            if ((varbitplayer_50301 == 1)) {
                int2 = 0;
            };
            break;
        }
        case 11682: {
            if ((script15454() > 0)) {
                int2 = (int2 - SCALE(int1, 100, script15454()));
            };
            break;
        }
        case 11749: {
            if ((script15455() > 0)) {
                int2 = (int2 - SCALE(int1, 100, script15455()));
            };
            break;
        }
        case 45677: {
            int2 = (int2 - SCALE(int1, 100, script16149()));
            break;
        }
        case 45678: {
            int2 = (int2 - SCALE(int1, 100, script16150()));
            break;
        }
        case 45679: {
            int2 = (int2 - SCALE(int1, 100, script16151()));
            break;
        }
        case 45680: {
            int2 = (int2 - SCALE(int1, 100, script16152()));
            break;
        }
        case 45681: {
            int2 = (int2 - SCALE(int1, 100, script16153()));
            break;
        }
        case 45682: {
            int2 = (int2 - SCALE(int1, 100, script16154()));
            break;
        }
        case 45683: {
            int2 = (int2 - SCALE(int1, 100, script16155()));
            break;
        }
        case 45684: {
            int2 = (int2 - SCALE(int1, 100, script16156()));
            break;
        }
        case 45685: {
            int2 = (int2 - SCALE(int1, 100, script16157()));
            break;
        }
        case 34282: {
            int2 = (int2 - SCALE(int1, 100, script331()));
            break;
        }
        case 34283: {
            int2 = (int2 - SCALE(int1, 100, script332()));
            break;
        }
        case 34694: {
            int2 = (int2 - SCALE(int1, 100, script389()));
            break;
        }
        case 34806: {
            int2 = (int2 - SCALE(int1, 100, script2444()));
            break;
        }
        case 34696: {
            int2 = (int2 - SCALE(int1, 100, script2455()));
            break;
        }
        case 34695: {
            int2 = (int2 - SCALE(int1, 100, script5701()));
            break;
        }
        case 38972: {
            int2 = (int2 - SCALE(int1, 100, script5704()));
            break;
        }
        case 37778: {
            int2 = (int2 - SCALE(int1, 100, script5705()));
            break;
        }
        case 634:
        case 1298:
        case 1577: {
            int2 = struct_getparam(int0, 4850);
            break;
        }
        case 45832:
        case 45833: {
            int2 = (int2 - SCALE(int1, 100, 20));
            break;
        }
        case 51611: {
            int2 = (int2 - script18802());
            break;
        }
        case 51612: {
            int2 = (int2 - script18804());
            break;
        }
    };
    return int2;
}