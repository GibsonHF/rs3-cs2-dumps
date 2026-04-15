//
function script1812(int0: component, string0: string): void {
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETTEXT("", int0);
        varclient_2410 = "";
        IF_SETONTIMER(callback(), int0);
        return;
    };
    IF_SETTEXT(string0, int0);
    varclient_2410 = string0;
    IF_SETONTIMER(callback(script1813, (CLIENTCLOCK() + 1000), int0), int0);
    return;
}