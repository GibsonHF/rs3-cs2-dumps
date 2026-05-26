//
function script4572(int0: number, int1: number, int2: number): void {
    if ((CLAN_GETCHATCOUNT() <= 0)) {
        IF_SETTEXT("Tap here to chat", int1);
        IF_SETHIDE(true, int2);
        return;
    };
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}