//
function script1391(int0: number, int1: number, int2: number): void {
    if ((unk10993(0) == 0)) {
        IF_SETTEXT("Tap here to chat", int1);
        IF_SETHIDE(1, int2);
        return;
    };
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(0, int2);
    } else {
        IF_SETHIDE(1, int2);
    };
    return;
}