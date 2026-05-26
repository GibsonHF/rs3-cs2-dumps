//
function script7204(int0: number, int1: number, int2: number): void {
    if (((int2 <= CLIENTCLOCK()) || (IF_GETHIDE(int1) == false))) {
        IF_SETHIDE(true, int0);
    };
    return;
}