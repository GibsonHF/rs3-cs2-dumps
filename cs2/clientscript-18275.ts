//
function script18275(int0: number, int1: number, int2: number): void {
    if ((int2-- > 0)) {
        IF_SETONTIMER(callback(script18275, int0, int1, int2), 85918353);
        return;
    };
    IF_SETONTIMER(callback(), comp(1311, 657));
    script18274(int0, int1);
    return;
}