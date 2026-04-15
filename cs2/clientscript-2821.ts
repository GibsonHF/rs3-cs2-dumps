//
function script2821(): void {
    SPLINE_NEW(0, 3);
    SPLINE_NEW(1, 3);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,29,47)), 2385, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,21,47)), 2370, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,33,55)), 2265, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,37,56)), 2260, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,13,48)), 2420, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,5,49)), 2355, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,33,57)), 2285, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,29,57)), 2235, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,5,51)), 2395, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,1,53)), 2380, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,25,56)), 2270, script2808(varclient_1065, pos(3,30,68,1,32), pos(0,30,68,21,56)), 2250, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 878 as cs2enum;
    script2825(0);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 0), comp(89, 0));
    return;
}