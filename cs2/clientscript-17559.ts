//
function script17559(int0: boolean, int1: int, int2: unknown_int): void {
    var int3 = 0;
    switch (int2) {
        case 1: {
            IF_SETHIDE(int0, comp(1181, 4));
            break;
        }
        case 2: {
            IF_SETHIDE(int0, comp(1181, 5));
            break;
        }
    };
    if ((int0 == true)) {
        if ((IF_GETHIDE(comp(1181, 4)) == false)) {
            int3 = 20;
        };
        if ((IF_GETHIDE(comp(1181, 5)) == false)) {
            int3 = 20;
        };
        IF_SETPOSITION(0, int3, 1, 0, comp(1181, 6));
    };
    if ((int1 != -1)) {
        switch (int2) {
            case 1: {
                IF_SETCOLOUR(int1, comp(1181, 13));
                break;
            }
            case 2: {
                IF_SETCOLOUR(int1, comp(1181, 61));
                break;
            }
        };
    };
    return;
}