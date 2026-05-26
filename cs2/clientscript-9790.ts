//
function script9790(int0: number): void {
    if ((int0 == 1)) {
        IF_SETOPKEY(1, 13, 8, 48758785);
        IF_SETONTIMER(callback(script9791, 0), 48758785);
    } else {
        IF_SETOPKEY(1, -1, -1, 48758785);
        IF_SETONOP(callback(), 48758785);
    };
    return;
}