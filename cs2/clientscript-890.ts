//
function script890(int0: int): void {
    IF_SETHIDE(true, comp(1402, 23));
    IF_SETHIDE(true, comp(1402, 27));
    IF_SETHIDE(true, comp(1402, 31));
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1402, 23));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1402, 27));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1402, 31));
            break;
        }
    };
    return;
}