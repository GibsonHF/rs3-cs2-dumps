//
function script18820(int0: component, int1: int, int2: int, int3: seq, int4: unknown_int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2-- > 0)) {
            CC_SETONTIMER(callback(script18820, int0, int1, int2, int3, int4));
            return;
        };
        CC_SETONTIMER(callback(script18820, int0, int1, (SEQLENGTH(int3) + 1), int3, int4));
        script18821(int0, int1, int3, int4);
    };
    return;
}