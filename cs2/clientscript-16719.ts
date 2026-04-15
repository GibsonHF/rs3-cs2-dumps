//
function script16719(int0: component, int1: obj, int2: int, int3: int, int4: int): void {
    script16706(int0, int1, int2, int4, int3, 0);
    if ((IF_FIND(int0) == 1)) {
        CC_SETONTIMER(callback(script12631, int0, -1));
        cc_setparam(5841, 4);
        cc_setparam(5840, 0);
        cc_setparam(5942, 1000);
    };
    return;
}