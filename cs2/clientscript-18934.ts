//
function script18934(int0: dbrow): unknown_int {
    switch (dbrow_getfield(int0, 127040, 0)) {
        case 0: {
            return 1;
        }
        case 1: {
            if ((script6431() == true)) {
                return 0;
            };
            break;
        }
        case 2: {
            if ((script6431() == false)) {
                return 0;
            };
            break;
        }
        case 4: {
            if ((CLIENTTYPE() != 8)) {
                return 0;
            };
            break;
        }
        case 3: {
            if ((PLATFORMTYPE() != 1)) {
                return 0;
            };
            break;
        }
        case 5: {
            if ((script19316() == false)) {
                return 0;
            };
            break;
        }
        case 6: {
            if ((varplayer_12314 <= 0)) {
                return 0;
            };
            break;
        }
        default: {
            return 0;
        }
    };
    return 1;
}