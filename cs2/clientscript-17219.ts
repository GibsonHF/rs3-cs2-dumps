//
function script17219(int0: number): void {
    var int1 = 0;
    var int2 = -1;
    switch (int0) {
        case 0: {
            IF_SETHIDE(0, 67502105);
            int2 = 10519;
            int1 = IF_GETX(67502105);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 67502107);
            int2 = 10516;
            int1 = IF_GETX(67502107);
            break;
        }
        case 2: {
            if ((script17214() == 0)) {
                IF_SETHIDE(1, 67502109);
                return;
            };
            IF_SETHIDE(0, 67502109);
            int2 = 10516;
            int1 = IF_GETX(67502109);
            break;
        }
    };
    stack(int2);
    stack(67502111);
    IF_SETGRAPHIC();
    IF_SETPOSITION(int1, 0, 0, 0, 67502111);
    if ((int2 != -1)) {
        script17224(int0);
    };
    return;
}