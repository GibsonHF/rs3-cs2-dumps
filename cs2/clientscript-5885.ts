//
function script5885(int0: number, int1: number): void {
    if ((IF_GETHIDE(int0) == true)) {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    };
    return;
}