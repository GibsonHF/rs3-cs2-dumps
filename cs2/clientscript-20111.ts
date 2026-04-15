//
function script20111(int0: int): void {
    if ((script12477() > int0)) {
        IF_SETHIDE(true, comp(843, 11));
        return;
    };
    script20113(int0);
    IF_SETHIDE(false, comp(843, 11));
    IF_SETONTIMER(callback(script20112, int0), comp(843, 11));
    return;
}