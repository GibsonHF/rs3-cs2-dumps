//
function script746(int0: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script747, 255, 1), comp(17, 1));
    } else {
        IF_SETONTIMER(callback(script747, 0, 1), comp(17, 1));
    };
    return;
}