//
function script2113(int0: component): void {
    IF_SETMODELANGLE(0, 0, RANDOM(2048), RANDOM(2048), RANDOM(2048), IF_GETMODELZOOM(int0), int0);
    switch (RANDOM(3)) {
        case 0: {
            IF_SETONTIMER(callback(script66, (RANDOM(3) + 9), 0, (RANDOM(3) + 9), int0), int0);
            break;
        }
        case 1: {
            IF_SETONTIMER(callback(script66, (RANDOM(3) + 9), (RANDOM(3) + 9), 0, int0), int0);
            break;
        }
        default: {
            IF_SETONTIMER(callback(script66, 0, (RANDOM(3) + 9), (RANDOM(3) + 9), int0), int0);
            break;
        }
    };
    return;
}