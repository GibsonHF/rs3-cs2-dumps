//
function script9463(int0: component, int1: component, int2: component, int3: int): void {
    switch (int3) {
        case 0: {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(false, int2);
            IF_SETHIDE(true, int1);
            break;
        }
        case 1: {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int1);
            break;
        }
        case 2: {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(true, int2);
            IF_SETHIDE(false, int1);
            break;
        }
    };
    return;
}