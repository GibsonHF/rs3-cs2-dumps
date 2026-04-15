//
function script10142(int0: int): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active.");
        return;
    };
    if ((CLIENTCLOCK() > (int0 + 50))) {
        IF_SETONTIMER(callback(), comp(232, 66));
        script10141(1);
    };
    return;
}