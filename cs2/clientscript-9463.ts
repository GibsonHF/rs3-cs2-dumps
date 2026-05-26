//
function script9463(int0: number, int1: number, int2: number, int3: number): void {
    switch (int3) {
        case 0: {
            IF_SETHIDE(1, int0);
            IF_SETHIDE(0, int2);
            IF_SETHIDE(1, int1);
            break;
        }
        case 1: {
            IF_SETHIDE(0, int0);
            IF_SETHIDE(1, int2);
            IF_SETHIDE(1, int1);
            break;
        }
        case 2: {
            IF_SETHIDE(1, int0);
            IF_SETHIDE(1, int2);
            IF_SETHIDE(0, int1);
            break;
        }
    };
    return;
}