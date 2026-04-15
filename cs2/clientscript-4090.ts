//
function script4090(int0: unknown_int, int1: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script4091, int1), comp(1202, 0));
    } else {
        IF_SETONTIMER(callback(script4092, int1), comp(1202, 0));
    };
    return;
}