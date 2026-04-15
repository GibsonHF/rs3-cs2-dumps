//
function script1055(int0: int): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((varclient_3698 == 1)) {
            IF_SETONTIMER(callback(script8298), comp(1477, 920));
        } else {
            IF_SETONTIMER(callback(), comp(1477, 920));
        };
    };
    return;
}