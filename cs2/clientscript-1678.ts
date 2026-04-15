//
function script1678(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as coordgrid;
    int0 = (COORDX(COORD()) - MODULO(COORDX(COORD()), 64));
    int1 = (COORDZ(COORD()) - MODULO(COORDZ(COORD()), 64));
    int2 = MOVECOORD(pos(0,0,0,0,0), int0, 0, int1);
    SPLINE_NEW(0, 5);
    SPLINE_NEW(1, 5);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int2, 51, 0, 39), 400, MOVECOORD(int2, 51, 0, 39), 400, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int2, 50, 0, 25), 225, MOVECOORD(int2, 50, 0, 25), 225, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int2, 51, 0, 29), 325, MOVECOORD(int2, 51, 0, 29), 225, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int2, 50, 0, 19), 175, MOVECOORD(int2, 50, 0, 19), 175, 0);
    SPLINE_ADDPOINT(0, 2, MOVECOORD(int2, 57, 0, 23), 1200, MOVECOORD(int2, 57, 0, 23), 1200, 0);
    SPLINE_ADDPOINT(1, 2, MOVECOORD(int2, 47, 0, 18), 25, MOVECOORD(int2, 47, 0, 18), 25, 0);
    SPLINE_ADDPOINT(0, 3, MOVECOORD(int2, 46, 0, 5), 600, MOVECOORD(int2, 46, 0, 5), 600, 0);
    SPLINE_ADDPOINT(1, 3, MOVECOORD(int2, 46, 0, 16), 250, MOVECOORD(int2, 46, 0, 16), 250, 0);
    SPLINE_ADDPOINT(0, 4, MOVECOORD(int2, 41, 0, 27), 1125, MOVECOORD(int2, 41, 0, 27), 1125, 0);
    SPLINE_ADDPOINT(1, 4, MOVECOORD(int2, 44, 0, 19), 275, MOVECOORD(int2, 44, 0, 19), 275, 0);
    return;
}