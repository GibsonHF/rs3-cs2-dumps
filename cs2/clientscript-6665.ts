//
function script6665(int0: component, int1: unknown_int, int2: int): void {
    if ((int2 == -1)) {
        IF_SETONTIMER(callback(script6664, -2147483645, int1, 0), int0);
        IF_SETONCLICK(callback(script6665, -2147483645, int1, -2147483647), int0);
    } else {
        var int2 = (int2 - (IF_GETWIDTH(int0) / 2));
        if ((int2 >= 0)) {
            IF_SETONTIMER(callback(script6664, -2147483645, int1, 1), int0);
        } else {
            IF_SETONTIMER(callback(script6664, -2147483645, int1, -1), int0);
        };
        IF_SETONCLICK(callback(script6665, -2147483645, int1, -1), int0);
    };
    return;
}