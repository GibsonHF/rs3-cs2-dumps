//
function script5613(int0: component, int1: int, int2: int, int3: unknown_int, int4: int): void {
    var [int2, int3, int4] = script5614(int0, int1, int2, int3, int4);
    IF_SETONTIMER(callback(script5613, int0, int1, int2, int3, int4), int0);
    return;
}