//
function script2815(): void {
    SPLINE_NEW(0, 4);
    SPLINE_NEW(1, 4);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,45,58)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,37,59)), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,29,58)), 210, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,25,58)), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,37,58)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,33,58)), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,21,58)), 335, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,58)), 325, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,29,56)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,29,55)), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,13,56)), 346, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,13,55)), 346, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,48)), 670, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,9,44)), 785, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,54)), 210, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,53)), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 877 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), comp(89, 0));
    return;
}