//
function script10083(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int2 == 3)) {
        if ((int2 == int0)) {
            IF_SETHIDE(false, int3);
            IF_SETONCLICK(callback(), int4);
        } else {
            IF_SETHIDE(true, int3);
            IF_SETONCLICK(callback(script2698, int0, int5, int6, int7), int4);
        };
    } else {
        IF_SETHIDE(true, int3);
        IF_SETONCLICK(callback(script2698, int0, int5, int6, int7), int4);
    };
    return;
}