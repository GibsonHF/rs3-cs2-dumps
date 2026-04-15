//[proc,fade2_flash_generic]
function script2804(int0: component, int1: unknown_int, int2: int, int3: unknown_int, int4: int, int5: int): void {
    IF_SETCOLOUR(int5, int0);
    IF_SETTRANS(int4, int0);
    IF_SETONTIMER(callback(script2805, int0, (0 - int2), int1, int3, int4), int0);
    return;
}