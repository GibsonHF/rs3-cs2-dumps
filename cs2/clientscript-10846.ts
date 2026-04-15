//
function script10846(int0: component, int1: int): void {
    IF_SETTEXT(script10848(varclient_4675), int0);
    IF_SETONTIMER(callback(script10847, int0, (CLIENTCLOCK() + int1)), int0);
    return;
}