//
function script20111(int0: number): void {
    if ((script12477() > int0)) {
        IF_SETHIDE(1, 55246859);
        return;
    };
    script20113(int0);
    IF_SETHIDE(0, 55246859);
    IF_SETONTIMER(callback(script20112, int0), 55246859);
    return;
}