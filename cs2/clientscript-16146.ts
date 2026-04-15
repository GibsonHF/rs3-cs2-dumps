//
function script16146(int0: struct, int1: boolean): unknown_int {
    switch (struct_getparam(int0, 7529)) {
        case 0: {
            break;
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
    };
    if (((int1 == true) && (struct_getparam(int0, 7534) == true))) {
        return 0;
    };
    if ((struct_getparam(int0, 4736) > -1)) {
        return CLIENTOPTION_EXISTS(struct_getparam(int0, 4736));
    };
    return 1;
}