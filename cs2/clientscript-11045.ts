//
function script11045(): void {
    if ((varclient_4736 < (CLIENTCLOCK() + 30))) {
        IF_SETHIDE(true, comp(745, 4));
        IF_SETHIDE(true, comp(745, 6));
        IF_SETHIDE(true, comp(745, 5));
        return;
    };
    var int0 = MAX(1, ((varclient_4736 - CLIENTCLOCK()) / 50));
    if ((int0 > 9)) {
        IF_SETHIDE(true, comp(745, 4));
        IF_SETHIDE(false, comp(745, 6));
        IF_SETHIDE(false, comp(745, 5));
        IF_SETGRAPHIC(script11046((int0 / 10)), comp(745, 6));
        IF_SETGRAPHIC(script11046(MODULO(int0, 10)), comp(745, 5));
    } else {
        IF_SETHIDE(false, comp(745, 4));
        IF_SETHIDE(true, comp(745, 6));
        IF_SETHIDE(true, comp(745, 5));
        IF_SETGRAPHIC(script11046(int0), comp(745, 4));
    };
    return;
}