//[proc,fade2_flash_generic]
function script2804(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETCOLOUR(int5, int0);
    IF_SETTRANS(int4, int0);
    IF_SETONTIMER(callback(script2805, int0, (0 - int2), int1, int3, int4), int0);
    return;
}