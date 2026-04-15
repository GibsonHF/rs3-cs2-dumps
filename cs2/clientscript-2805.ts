//[clientscript,fade2_flash_timer]
function script2805(int0: component, int1: int, int2: unknown_int, int3: int, int4: int): void {
    var int5 = IF_GETTRANS(int0);
    var int6 = MIN(MAX((int5 + int1), int3), int4);
    if (((int6 == int3) || (int6 == int4))) {
        IF_SETONTIMER(callback(script2805, int0, int2, int1, int3, int4), int0);
    };
    IF_SETTRANS(int6, int0);
    return;
}