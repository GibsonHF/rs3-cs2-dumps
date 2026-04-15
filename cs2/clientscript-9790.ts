//
function script9790(int0: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETOPKEY(1, 13, 8, comp(744, 1));
        IF_SETONTIMER(callback(script9791, 0), comp(744, 1));
    } else {
        IF_SETOPKEY(1, -1, -1, comp(744, 1));
        IF_SETONOP(callback(), comp(744, 1));
    };
    return;
}