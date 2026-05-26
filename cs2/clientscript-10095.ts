//
function script10095(int0: number): void {
    var int1 = IF_GETTRANS(99287053);
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 99287053);
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), 99287053);
    } else {
        IF_SETTRANS((int1 - 1), 99287053);
    };
    return;
}