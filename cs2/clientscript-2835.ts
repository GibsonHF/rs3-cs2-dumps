//
function script2835(): void {
    var int0 = (COORDX(COORD()) - MODULO(COORDX(COORD()), 64));
    var int1 = (COORDZ(COORD()) - MODULO(COORDZ(COORD()), 64));
    var int2 = MOVECOORD(pos(0,0,0,0,0), int0, 0, int1);
    SPLINE_NEW(0, 4);
    SPLINE_NEW(1, 4);
    SPLINE_ADDPOINT(0, 0, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,28)), 1185, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,13,28)), 1030, 0);
    SPLINE_ADDPOINT(1, 0, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,19)), 338, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,21)), 338, 0);
    SPLINE_ADDPOINT(0, 1, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,25,25)), 790, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,25,23)), 705, 0);
    SPLINE_ADDPOINT(1, 1, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,25)), 338, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,26)), 338, 0);
    SPLINE_ADDPOINT(0, 2, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,22)), 620, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,24)), 580, 0);
    SPLINE_ADDPOINT(1, 2, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,29)), 338, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,31)), 338, 0);
    SPLINE_ADDPOINT(0, 3, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,35)), 495, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,37)), 445, 0);
    SPLINE_ADDPOINT(1, 3, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,38)), 338, script2808(int2, pos(0,52,91,33,8), pos(0,52,91,5,40)), 338, 0);
    varclient_1068 = 0;
    IF_SETONCAMFINISHED(callback(script2836), comp(384, 0));
    CAM_MOVEALONG(0, 0, 400, 400, 1, 0);
    return;
}