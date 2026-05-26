//
function script6153(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int0, int1, 0, int2), int3, MOVECOORD(int0, int1, 0, int2), int3, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int0, int4, 0, int5), int6, MOVECOORD(int0, int4, 0, int5), int6, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int0, int1, 0, int2), int3, MOVECOORD(int0, int1, 0, int2), int3, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int0, int4, 0, int5), int6, MOVECOORD(int0, int4, 0, int5), int6, 0);
    CAM_MOVEALONG(0, 0, 999, 999, 1, 0);
    return;
}