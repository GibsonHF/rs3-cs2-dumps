//
function script18275(int0: number, int1: number, int2: number): void {
    stack(int2);
    var int2 = (int2 - 1);
    if (BRANCH_GREATER_THAN(0)) {
        IF_SETONTIMER(callback(script18275, int0, int1, int2), comp(1311, 657));
        return;
    };
    IF_SETONTIMER(callback(), comp(1311, 657));
    script18274(int0, int1);
    return;
}