//
function script10083(int0: int, int1: unknown_int, int2: int, int3: component, int4: component, int5: int, int6: int, int7: unknown_int): void {
    if (((int2 == 3) && (int2 == int0))) {
        IF_SETHIDE(false, int3);
        IF_SETONCLICK(callback(), int4);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETONCLICK(callback(script2698, int0, int5, int6, int7), int4);
    };
    return;
}