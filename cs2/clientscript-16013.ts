//
function script16013(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16013, int0, int1, int2, int3, int4), comp(485, 13));  // trh181_overlay:gem_layer
        return;
    };
    script16080(int1, int2, int3, int4);
    script16728(int2, int3);
    return;
}