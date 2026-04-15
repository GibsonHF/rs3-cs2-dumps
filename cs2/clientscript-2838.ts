//
function script2838(): void {
    var int0 = (COORDX(COORD()) - MODULO(COORDX(COORD()), 64));
    var int1 = (COORDZ(COORD()) - MODULO(COORDZ(COORD()), 64));
    var int2 = MOVECOORD(pos(0,0,0,0,0), int0, 0, int1);
    SPLINE_NEW(0, 6);
    SPLINE_NEW(1, 6);
    SPLINE_ADDPOINT(0, 0, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,21)), 1025, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,21)), 790, 0);
    SPLINE_ADDPOINT(1, 0, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,24)), 355, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,24)), 265, 0);
    SPLINE_ADDPOINT(0, 1, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,34)), 506, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,34)), 506, 0);
    SPLINE_ADDPOINT(1, 1, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,37)), 190, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,37)), 190, 0);
    SPLINE_ADDPOINT(0, 2, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,31)), 506, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,31)), 506, 0);
    SPLINE_ADDPOINT(1, 2, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,36)), 195, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,36)), 210, 0);
    SPLINE_ADDPOINT(0, 3, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,28)), 506, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,27)), 506, 0);
    SPLINE_ADDPOINT(1, 3, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,31)), 115, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,30)), 70, 0);
    SPLINE_ADDPOINT(0, 4, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,26)), 506, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,25)), 506, 0);
    SPLINE_ADDPOINT(1, 4, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,30)), 240, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,29)), 330, 0);
    SPLINE_ADDPOINT(0, 5, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,24)), 506, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,23)), 506, 0);
    SPLINE_ADDPOINT(1, 5, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,37)), 350, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,39)), 350, 0);
    varclient_1068 = 0;
    IF_SETONCAMFINISHED(callback(script2840), comp(384, 0));
    CAM_MOVEALONG(0, varclient_1068, 100, 100, 1, varclient_1068);
    return;
}