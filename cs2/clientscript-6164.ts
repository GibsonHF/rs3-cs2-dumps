//
function script6164(int0: component, int1: int): void {
    if ((int1 < 1)) {
        var int1 = (int1 + 1);
        IF_SETONTIMER(callback(script6164, 83427341, int1), comp(1273, 13));
    } else {
        IF_SETONTIMER(callback(), int0);
        script6165(0);
    };
    return;
}