//
function script5613(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    [int2, int3, int4] = script5614(int0, int1, int2, int3, int4);
    IF_SETONTIMER(callback(script5613, int0, int1, int2, int3, int4), int0);
    return;
}