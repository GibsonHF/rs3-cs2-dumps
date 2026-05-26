//
function script12126(int0: number, int1: number, int2: number): void {
    if ((varclient_5116 > int0)) {
        IF_SETONTIMER(callback(script12127, -2147483645, (CLIENTCLOCK() + 500)), 111935525);
        script12128();
        return;
    };
    IF_SETONTIMER(callback(), 111935525);
    script12129(int0, int1, int2);
    return;
}