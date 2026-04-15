//
function script10697(int0: unknown_int): void {
    var string0 = "Time left as Cres: ";
    if ((int0 == 0)) {
        string0 = "Cres statue cooldown: ";
    };
    varclient_4624 = (CLIENTCLOCK() + 3000);
    IF_SETONTIMER(callback(script10698, int0, string0, 0, 60), 46268417);
    return;
}