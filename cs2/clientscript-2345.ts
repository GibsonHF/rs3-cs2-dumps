//
function script2345(): void {
    varclient_769 = 0;
    var int0 = (COORDX(COORD()) - MODULO(COORDX(COORD()), 64));
    var int1 = (COORDZ(COORD()) - MODULO(COORDZ(COORD()), 64));
    var int2 = MOVECOORD(pos(0,0,0,0,0), int0, 0, int1);
    var int3 = MOVECOORD(int2, COORDX(pos(0,0,0,60,40)), 0, COORDZ(pos(0,0,0,60,40)));
    SPLINE_NEW(0, 5);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int3, 0, 0, -5), 800, MOVECOORD(int3, 0, 0, -5), 900, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int3, -5, 0, -1), 800, MOVECOORD(int3, -5, 0, 0), 900, 0);
    SPLINE_ADDPOINT(0, 2, MOVECOORD(int3, -1, 0, 5), 800, MOVECOORD(int3, 0, 0, 5), 900, 0);
    SPLINE_ADDPOINT(0, 3, MOVECOORD(int3, 5, 0, 1), 800, MOVECOORD(int3, 5, 0, 0), 900, 0);
    SPLINE_ADDPOINT(0, 4, MOVECOORD(int3, 0, 0, -3), 800, MOVECOORD(int3, 0, 0, -3), 900, 0);
    SPLINE_NEW(1, 5);
    SPLINE_ADDPOINT(1, 0, int3, 400, int3, 400, 0);
    SPLINE_ADDPOINT(1, 1, int3, 400, int3, 400, 0);
    SPLINE_ADDPOINT(1, 2, int3, 400, int3, 400, 0);
    SPLINE_ADDPOINT(1, 3, int3, 400, int3, 400, 0);
    SPLINE_ADDPOINT(1, 4, int3, 500, int3, 500, 0);
    CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
    IF_SETONCAMFINISHED(callback(script2346), comp(582, 0));
    return;
}