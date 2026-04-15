//
function script2819(): void {
    SPLINE_NEW(0, 5);
    SPLINE_NEW(1, 5);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,57)), 378, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,16,56)), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,56,49)), 210, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,8,45)), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,36,41)), 378, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,36,34)), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,4,39)), 210, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,0,37)), 210, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,4,23)), 378, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,52,20)), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,36,31)), 210, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,20,30)), 210, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,8,19)), 435, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,21)), 465, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,32)), 210, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,32)), 210, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,25)), 545, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,26)), 530, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,32)), 210, script2808(varclient_1065, pos(0,9,11,0,0), pos(0,9,11,60,32)), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 876 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), comp(89, 0));
    return;
}