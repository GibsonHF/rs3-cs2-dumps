//
function script10142(int0: number): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active.");
        return;
    };
    if ((CLIENTCLOCK() > (int0 + 50))) {
        IF_SETONTIMER(callback(), 15204418);
        script10141(1);
    };
    return;
}