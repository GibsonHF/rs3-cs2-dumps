//
function script3473(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int1 < (SPLINE_LENGTH(0) - 1))) {
        CAM_MOVEALONG(0, int1, int2, int3, 1, int1);
        IF_SETONCAMFINISHED(callback(script3473, int0, (int1 + 1), int4, int5, 0, 0), int0);
    } else {
        IF_SETONCAMFINISHED(callback(), int0);
    };
    return;
}