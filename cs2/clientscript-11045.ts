//
function script11045(): void {
    if ((varclient_4736 < (CLIENTCLOCK() + 30))) {
        IF_SETHIDE(1, 48824324);
        IF_SETHIDE(1, 48824326);
        IF_SETHIDE(1, 48824325);
        return;
    };
    var int0 = MAX(1, ((varclient_4736 - CLIENTCLOCK()) / 50));
    if ((int0 > 9)) {
        IF_SETHIDE(1, 48824324);
        IF_SETHIDE(0, 48824326);
        IF_SETHIDE(0, 48824325);
        stack(script11046((int0 / 10)));
        stack(48824326);
        IF_SETGRAPHIC();
        stack(script11046(MODULO(int0, 10)));
        stack(48824325);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(0, 48824324);
        IF_SETHIDE(1, 48824326);
        IF_SETHIDE(1, 48824325);
        stack(script11046(int0));
        stack(48824324);
        IF_SETGRAPHIC();
    };
    return;
}