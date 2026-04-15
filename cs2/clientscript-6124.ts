//
function script6124(int0: coordgrid, int1: coordgrid, int2: int, int3: int, int4: coordgrid, int5: coordgrid, int6: int, int7: int, int8: int): void {
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, int0, int2, int0, int2, 0);
    SPLINE_ADDPOINT(1, 0, int4, int6, int4, int6, 0);
    SPLINE_ADDPOINT(0, 1, int1, int3, int1, int3, 0);
    SPLINE_ADDPOINT(1, 1, int5, int7, int5, int7, 0);
    CAM_MOVEALONG(0, 0, int8, int8, 1, 0);
    return;
}