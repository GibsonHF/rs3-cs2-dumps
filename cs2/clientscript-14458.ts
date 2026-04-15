//
function script14458(int0: component, int1: int, int2: component, int3: int, int4: struct, int5: struct, int6: int, int7: struct, string0: string, string1: string): void {
    CC_SETONOP(callback(script10422, int0, int1, int2, int3, string0, string1, int6, int7));
    CC_SETOP(1, "Toggle");
    CC_SETONMOUSEOVER(callback(script6265, int2, int3, int5));
    CC_SETONMOUSELEAVE(callback(script6265, int2, int3, int4));
    return;
}