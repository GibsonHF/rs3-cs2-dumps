//
function script4572(int0: int, int1: component, int2: component): void {
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