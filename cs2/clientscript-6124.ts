//
function script6124(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, int0, int2, int0, int2, 0);
    SPLINE_ADDPOINT(1, 0, int4, int6, int4, int6, 0);
    SPLINE_ADDPOINT(0, 1, int1, int3, int1, int3, 0);
    SPLINE_ADDPOINT(1, 1, int5, int7, int5, int7, 0);
    CAM_MOVEALONG(0, 0, int8, int8, 1, 0);
    return;
}