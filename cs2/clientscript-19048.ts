//
function script19048(int0: number, int1: number): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((int1 == 1)) {
            IF_SETHIDE(0, 66453552);
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), 66453550);
        } else {
            IF_SETHIDE(0, 66453605);
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), 66453551);
        };
    };
    return;
}