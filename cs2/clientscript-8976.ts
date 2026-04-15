//
function script8976(): void {
    varbitplayer_18640 = MAX(0, (varbitplayer_18640 - 1));
    switch (varbitplayer_18639) {
        case 0: {
            if ((varbitplayer_18640 == 0)) {
                IF_SETHIDE(false, comp(1496, 246));
                return;
            };
            break;
        }
        case 1: {
            if ((varbitplayer_18640 == 0)) {
                if ((script8960(0) > 0)) {
                    script8964(1);
                } else {
                    IF_SETHIDE(false, comp(1496, 246));
                    return;
                };
            };
            break;
        }
        case 2: {
            if ((varbitplayer_18640 == 0)) {
                if ((script8960(0) > 0)) {
                    script8964(1);
                } else {
                    IF_SETHIDE(false, comp(1496, 246));
                    return;
                };
            };
            break;
        }
        case 3: {
            if ((varbitplayer_18640 == 0)) {
                if ((script8960(2) > 0)) {
                    script8968(1);
                } else if ((script8960(1) > 0)) {
                    script8966(1);
                } else if ((script8960(0) > 0)) {
                    script8964(1);
                } else {
                    return;
                };
            };
            break;
        }
        case 4: {
            if ((varbitplayer_18640 == 0)) {
                if ((script8960(3) > 0)) {
                    script8970(1);
                } else if ((script8960(2) > 0)) {
                    script8968(1);
                } else if ((script8960(1) > 0)) {
                    script8966(1);
                } else if ((script8960(0) > 0)) {
                    script8964(1);
                } else {
                    return;
                };
            };
            break;
        }
    };
    script8957(script8960(varbitplayer_18639), MAX(1, varbitplayer_18640));
    script8977();
    return;
}