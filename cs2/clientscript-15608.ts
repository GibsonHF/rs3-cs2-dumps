//
function script15608(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    switch (int0) {
        case 1: {
            int1 = script20335(1);
            int2 = 59375711;
            break;
        }
        case 2: {
            int1 = script20335(2);
            int2 = 59375712;
            break;
        }
        case 3: {
            int1 = script20335(3);
            int2 = 59375713;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 > 0)) {
        if ((varbitplayer_58378 == 1)) {
            IF_TRIGGEROP(int2, 0, 1);
        } else {
            IF_TRIGGEROP(int2, -1, 1);
        };
    };
    return;
}