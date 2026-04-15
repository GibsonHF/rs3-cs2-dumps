//
function script4673(int0: int): void {
    switch (int0) {
        case 2:
        case 3:
        case 6: {
            IF_SETHIDE(true, comp(102, 35));
            IF_SETHIDE(false, comp(102, 34));
            IF_SETONTIMER(callback(script4674), comp(102, 34));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(102, 34));
            IF_SETHIDE(false, comp(102, 35));
            IF_SETONTIMER(callback(script4674), comp(102, 35));
            break;
        }
    };
    return;
}