//
function script5243(int0: number): void {
    var int1 = IF_GETTRANS(106496005);
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 106496005);
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), 106496005);
    } else {
        IF_SETTRANS((int1 - 1), 106496005);
    };
    return;
}