//
function script9047(int0: component, int1: unknown_int): void {
    IF_SETMODELANIM(32989 as seq, int0);
    var int2 = (RANDOM(72) + 22);
    IF_SETONTIMER(callback(script9072, int0, int2, int1), int0);
    IF_SETONTIMER(callback(), 82116641);
    IF_SETONMOUSEOVER(callback(script9073, int0, int1), int0);
    IF_SETONMOUSELEAVE(callback(script9216, int0, int1), int0);
    return;
}