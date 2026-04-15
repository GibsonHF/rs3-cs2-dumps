//
function script6116(int0: component, int1: unknown_int, int2: unknown_int): void {
    IF_SETHIDE(false, int0);
    switch (varclient_1884) {
        case 0: {
            IF_SETPOSITION(16383, IF_GETY(int0), 5, 0, int0);
            break;
        }
        case 1: {
            IF_SETPOSITION(IF_GETX(int0), 16383, 0, 5, int0);
            break;
        }
        case 2: {
            IF_SETPOSITION(16383, IF_GETY(int0), 3, 0, int0);
            break;
        }
        case 3: {
            IF_SETPOSITION(IF_GETX(int0), 16383, 0, 3, int0);
            break;
        }
    };
    IF_SETONTIMER(callback(script6117, -2147483645, int1, 0, int2, 0), int0);
    return;
}