//
function script7204(int0: component, int1: component, int2: int): void {
    if (((int2 <= CLIENTCLOCK()) || (IF_GETHIDE(int1) == false))) {
        IF_SETHIDE(true, int0);
    };
    return;
}