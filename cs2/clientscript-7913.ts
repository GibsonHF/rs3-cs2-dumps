//
function script7913(): void {
    if ((CLIENTCLOCK() < varclient_3492)) {
        return;
    };
    varclient_3492 = (CLIENTCLOCK() + 6000);
    IF_SETMODELANIM(20953, 93061166);
    IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 210)), 93061134);
    return;
}