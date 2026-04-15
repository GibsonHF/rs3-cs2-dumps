//
function script2072(): int {
    var int0 = 10;
    switch (script6061(3)) {
        case 1: {
            int0 = 15;
            break;
        }
        case 2: {
            int0 = 30;
            break;
        }
        case 3: {
            int0 = 60;
            break;
        }
    };
    if ((varbitplayer_44292 == 30)) {
        switch (script15809(3)) {
            case 2: {
                int0 = (int0 + 5);
                break;
            }
            case 3: {
                int0 = (int0 + 10);
                break;
            }
        };
    };
    return int0;
}