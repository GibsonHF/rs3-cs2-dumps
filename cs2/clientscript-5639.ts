//
function script5639(int0: int, int1: int): void {
    if ((script13749() == true)) {
        switch (int0) {
            case -1: {
                varbitplayer_49341 = int1;
                return;
            }
            case 0: {
                varbitplayer_49342 = int1;
                return;
            }
            case 1: {
                varbitplayer_49343 = int1;
                return;
            }
            case 2: {
                varbitplayer_49344 = int1;
                return;
            }
            case 3: {
                varbitplayer_49345 = int1;
                return;
            }
        };
    };
    switch (int0) {
        case -1: {
            varbitplayer_38837 = int1;
            break;
        }
        case 0: {
            varbitplayer_38838 = int1;
            break;
        }
        case 1: {
            varbitplayer_38839 = int1;
            break;
        }
        case 2: {
            varbitplayer_38840 = int1;
            break;
        }
        case 3: {
            varbitplayer_38841 = int1;
            break;
        }
        default: {
            script12478(`Attempting to set invalid music option mode: ${inttostring(int0, 10)}`);
            break;
        }
    };
    return;
}