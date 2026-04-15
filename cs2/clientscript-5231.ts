//
function script5231(int0: component): void {
    switch (varclient_1007) {
        case 0: {
            script2766(0, 30, int0);
            break;
        }
        case 1: {
            script2768(30, int0);
            break;
        }
        case 2: {
            if ((SPLINE_LENGTH(0) == 5)) {
                CAM_MOVEALONG(0, 0, 300, 800, 1, 0);
                IF_SETONCAMFINISHED(callback(script5232, int0, 1), int0);
            };
            break;
        }
        case 3: {
            if ((SPLINE_LENGTH(0) == 5)) {
                CAM_MOVEALONG(0, 3, 500, 400, 1, 3);
            };
            break;
        }
        default: {
            CC_DELETEALL(int0);
            CAM_RESET();
            break;
        }
    };
    return;
}