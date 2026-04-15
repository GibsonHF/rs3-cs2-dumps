//
function script12126(int0: int, int1: unknown_int, int2: unknown_int): void {
    if ((varclient_5116 > int0)) {
        IF_SETONTIMER(callback(script12127, -2147483645, (CLIENTCLOCK() + 500)), comp(1708, 37));
        script12128();
        return;
    };
    IF_SETONTIMER(callback(), comp(1708, 37));
    script12129(int0, int1, int2);
    return;
}