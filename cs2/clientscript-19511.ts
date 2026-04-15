//
function script19511(): void {
    if (((varclient_8171 == CLIENTCLOCK()) || (varclient_8171 == -1))) {
        return;
    };
    script19507();
    script19552();
    if ((varclient_8172 <= CLIENTCLOCK())) {
        script19518(1);
        varclient_8172 = (CLIENTCLOCK() + 5);
    };
    return;
}