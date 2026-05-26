//
function script16564(int0: number, int1: number): number {
    if ((((dbrow_getfield(int0, 114816, 0) == false) && (script15536() == 7)) && (script15532(0) == 1))) {
        return 0;
    };
    var int2 = DB_GETFIELDCOUNT(int0, 114784);
    if ((int2 == 0)) {
        return 1;
    };
    var int3 = 0;
    while ((int3 < int2)) {
        switch (dbrow_getfield(int0, 114784, int3)) {
            case 1: {
                if ((varbitplayer_30224 == 0)) {
                    return 0;
                };
                break;
            }
            case 2: {
                if ((enum_hasoutput(9, 5135, int1) == 1)) {
                    return 0;
                };
                break;
            }
            case 3: {
                if ((enum_hasoutput(9, 13398, int1) == 1)) {
                    return 0;
                };
                break;
            }
            case 4: {
                if (((script6431() == 1) && (enum_hasoutput(9, 5135, int1) == 0))) {
                    return 0;
                };
                break;
            }
            case 6: {
                if ((script16544() == 30)) {
                    return 0;
                };
                break;
            }
            case 7: {
                if ((script20129() == 0)) {
                    return 0;
                };
                break;
            }
            case 8: {
                return 0;
            }
        };
        int3 = (int3 + 1);
    };
    return 1;
}