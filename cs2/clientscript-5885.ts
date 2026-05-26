//
function script5885(int0: number, int1: number): void {
    if ((IF_GETHIDE(int0) == 1)) {
        IF_SETHIDE(0, int0);
        IF_SETHIDE(1, int1);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
    };
    return;
}