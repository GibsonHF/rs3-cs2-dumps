//
function script9598(int0: unknown_int): void {
    if (((int0 == 1) && (varbitplayer_22423 == 1))) {
        return;
    };
    if (((int0 == 2) && (varbitplayer_22424 == 1))) {
        return;
    };
    if (((int0 == 3) && (varbitplayer_22425 == 1))) {
        return;
    };
    IF_SETHIDE(true, comp(1029, 2));
    IF_SETHIDE(true, comp(1029, 61));
    IF_SETHIDE(true, comp(1029, 8));
    IF_SETHIDE(false, comp(1029, 99));
    IF_SETTEXT("retrieving poll information...", comp(1029, 102));
    switch (int0) {
        case 0: {
            break;
        }
        case 1: {
            if ((varbitplayer_22423 == 0)) {
                varbitplayer_21343 = 0;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_22424 == 0)) {
                varbitplayer_21343 = 1;
            };
            break;
        }
        case 3: {
            if ((varbitplayer_22425 == 0)) {
                varbitplayer_21343 = 2;
            };
            break;
        }
    };
    return;
}