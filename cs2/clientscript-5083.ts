//
function script5083(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() < int2)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    if ((int1 == varclient_160)) {
        script72(73007131, 73007130, IF_GETSCROLLY(comp(1114, 26)));  // clan_field_setup:dropdown_options
    };
    return;
}