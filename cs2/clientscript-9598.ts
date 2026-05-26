//
function script9598(int0: number): void {
    if (((int0 == 1) && (varbitplayer_22423 == 1))) {
        return;
    };
    if (((int0 == 2) && (varbitplayer_22424 == 1))) {
        return;
    };
    if (((int0 == 3) && (varbitplayer_22425 == 1))) {
        return;
    };
    IF_SETHIDE(1, 67436546);
    IF_SETHIDE(1, 67436605);
    IF_SETHIDE(1, 67436552);
    IF_SETHIDE(0, 67436643);
    IF_SETTEXT("retrieving poll information...", 67436646);
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