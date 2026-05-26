//
function script8974(): void {
    varbitplayer_18640 = (varbitplayer_18640 + 1);
    switch (varbitplayer_18639) {
        case 0: {
            if ((varbitplayer_18640 >= script8960(0))) {
                varbitplayer_18640 = 1;
                if ((script8960(1) > 0)) {
                    script8966(0);
                } else if ((script8960(2) > 0)) {
                    script8968(0);
                } else if ((script8960(3) > 0)) {
                    script8970(0);
                } else if ((script8960(4) > 0)) {
                    script8972(0);
                } else {
                    script8962(0);
                };
            };
            break;
        }
        case 1: {
            if ((varbitplayer_18640 > script8960(1))) {
                varbitplayer_18640 = 1;
                if ((script8960(2) > 0)) {
                    script8968(0);
                } else if ((script8960(3) > 0)) {
                    script8970(0);
                } else if ((script8960(4) > 0)) {
                    script8972(0);
                } else {
                    script8962(0);
                };
            };
            break;
        }
        case 2: {
            if ((varbitplayer_18640 > script8960(2))) {
                varbitplayer_18640 = 1;
                if ((script8960(3) > 0)) {
                    script8970(0);
                } else if ((script8960(4) > 0)) {
                    script8972(0);
                } else {
                    script8962(0);
                };
            };
            break;
        }
        case 3: {
            if ((varbitplayer_18640 > script8960(3))) {
                varbitplayer_18640 = 1;
                if ((script8960(4) > 0)) {
                    script8972(0);
                } else {
                    script8962(0);
                };
            };
            break;
        }
        case 4: {
            if ((varbitplayer_18640 > script8960(4))) {
                script8962(0);
            };
            break;
        }
    };
    IF_SETHIDE(true, comp(1496, 246));
    script8957(script8960(varbitplayer_18639), MAX(1, varbitplayer_18640));
    script8977();
    return;
}