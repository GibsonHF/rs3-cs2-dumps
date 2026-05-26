//
function script17559(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    switch (int2) {
        case 1: {
            IF_SETHIDE(int0, 77398020);
            break;
        }
        case 2: {
            IF_SETHIDE(int0, 77398021);
            break;
        }
    };
    if ((int0 == 1)) {
        if ((IF_GETHIDE(77398020) == 0)) {
            int3 = 20;
        };
        if ((IF_GETHIDE(77398021) == 0)) {
            int3 = 20;
        };
        IF_SETPOSITION(0, int3, 1, 0, 77398022);
    };
    if ((int1 != -1)) {
        switch (int2) {
            case 1: {
                IF_SETCOLOUR(int1, 77398029);
                break;
            }
            case 2: {
                IF_SETCOLOUR(int1, 77398077);
                break;
            }
        };
    };
    return;
}