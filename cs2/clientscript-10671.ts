//
function script10671(int0: number): void {
    IF_SETONTIMER(callback(), 101056538);
    if ((int0 == 1)) {
        IF_SETCOLOUR(16711680, 101056538);
    } else {
        IF_SETCOLOUR(65280, 101056538);
    };
    IF_SETTRANS(0, 101056538);
    IF_SETONTIMER(callback(script10670, 101056538), 101056538);
    return;
}