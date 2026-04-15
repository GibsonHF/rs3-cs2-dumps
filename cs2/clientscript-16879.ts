//
function script16879(int0: component, int1: int, int2: unknown_int, int3: int): void {
    var int4 = (375 / 2);
    if ((++int3 < int4)) {
        IF_SETONTIMER(callback(script16879, int0, int1, int2, int3), int0);
        return;
    };
    script16880(int0, int1, int2);
    IF_SETONTIMER(callback(script16879, int0, int1, int2, 0), int0);
    return;
}