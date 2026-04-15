//
function script9415(int0: component, int1: component, int2: component, int3: component, int4: component, int5: int, int6: struct, int7: int): void {
    IF_SETHIDE(true, int1);
    IF_SETHIDE(false, int2);
    IF_SETONMOUSEREPEAT(callback(script9417, int0, -2147483647, -2147483646, int5, struct_getparam(int6, 3939), struct_getparam(int6, 3941), struct_getparam(int6, 3943), int7, int6), int0);
    IF_SETONMOUSELEAVE(callback(script8805), int0);
    return;
}