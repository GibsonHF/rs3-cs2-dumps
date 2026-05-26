//
function script16146(int0: number, int1: number): number {
    switch (struct_getparam(int0, 7529)) {
        case 0: {
            break;
        }
        case 1: {
            if ((script6431() == 1)) {
                return 0;
            };
            break;
        }
        case 2: {
            if ((script6431() == 0)) {
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
            if ((script19316() == 0)) {
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
    };
    if (((int1 == 1) && (struct_getparam(int0, 7534) == true))) {
        return 0;
    };
    if ((struct_getparam(int0, 4736) > -1)) {
        return CLIENTOPTION_EXISTS(struct_getparam(int0, 4736));
    };
    return 1;
}