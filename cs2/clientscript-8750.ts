//
function script8750(int0: unknown_int): void {
    var int1 = struct_getparam(script10405(2000), 3507);
    if ((int0 == 1)) {
        script8844(1, 13, 0, int1, 1);
    } else if ((CC_FIND(int1, 1) == 1)) {
        CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        CC_SETONTIMER(callback());
    };
    return;
}