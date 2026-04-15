//
function script2823(): void {
    SPLINE_NEW(0, 7);
    SPLINE_NEW(1, 7);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,32,53)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,40,52)), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,56,47)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,56,48)), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,40,54)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,36,54)), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,60,49)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,60,50)), 210, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,24,53)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,16,53)), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,51)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,52)), 210, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,8,51)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,8,49)), 378, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,53)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,54)), 210, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,16,48)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,24,47)), 378, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,56)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,57)), 210, 0);
    SPLINE_ADDPOINT(0, 5, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,40,48)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,44,48)), 378, 0);
    SPLINE_ADDPOINT(1, 5, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,59)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,60)), 210, 0);
    SPLINE_ADDPOINT(0, 6, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,48,48)), 378, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,52,48)), 378, 0);
    SPLINE_ADDPOINT(1, 6, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,60,0,62)), 210, script2808(varclient_1065, pos(0,38,60,0,24), pos(0,39,61,0,0)), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 879 as cs2enum;
    script2825(0);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 0), comp(89, 0));
    return;
}