//
function script9935(int0: component, int1: int, int2: int): void {
    if (((int1 < 0) && (int2 < 0))) {
        return;
    };
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int3 = IF_GETLAYER(int0);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9935, int0, int1, int2, 3680, 1), int3);
    IF_SETNOCLICKTHROUGH(1, int0);
    var int4 = 0;
    if ((int1 >= 0)) {
        switch (int1) {
            case 0:
            case 1:
            case 2:
            case 3: {
                if ((varbitplayer_27170 == int1)) {
                    int4 = 1;
                };
                break;
            }
            case 4: {
                if ((varbitplayer_27168 == 1)) {
                    int4 = 1;
                };
                break;
            }
            case 5: {
                if ((varbitplayer_27169 == 1)) {
                    int4 = 1;
                };
                break;
            }
            case 6: {
                if ((varbitplayer_38842 == 1)) {
                    int4 = 1;
                };
                break;
            }
            case 7: {
                if (((varbitplayer_27169 == 1) || (varbitplayer_38842 == 1))) {
                    int4 = 1;
                };
                break;
            }
        };
    } else if ((int2 >= 0)) {
        switch (int2) {
            case 0:
            case 1:
            case 2:
            case 3: {
                if ((varbitplayer_27170 != int2)) {
                    int4 = 1;
                };
                break;
            }
            case 4: {
                if ((varbitplayer_27168 == 0)) {
                    int4 = 1;
                };
                break;
            }
            case 5: {
                if ((varbitplayer_27169 == 0)) {
                    int4 = 1;
                };
                break;
            }
        };
    };
    if ((int4 == 1)) {
        IF_SETHIDE(false, int0);
    } else {
        IF_SETHIDE(true, int0);
    };
    return;
}