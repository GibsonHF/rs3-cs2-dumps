//
function script2817(): void {
    SPLINE_NEW(0, 8);
    SPLINE_NEW(1, 8);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,9,55)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,13,55)), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,21,55)), 325, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,25,55)), 295, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,55)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,21,55)), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,29,55)), 330, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,33,55)), 335, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,25,55)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,29,55)), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,37,55)), 330, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,41,55)), 350, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,33,55)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,37,55)), 378, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,45,55)), 325, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,49,55)), 305, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,41,55)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,45,55)), 378, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,53,55)), 340, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,57,55)), 325, 0);
    SPLINE_ADDPOINT(0, 5, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,49,54)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,53,53)), 378, 0);
    SPLINE_ADDPOINT(1, 5, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,61,55)), 330, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,1,55)), 340, 0);
    SPLINE_ADDPOINT(0, 6, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,57,53)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,61,53)), 378, 0);
    SPLINE_ADDPOINT(1, 6, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,5,55)), 346, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,9,55)), 346, 0);
    SPLINE_ADDPOINT(0, 7, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,1,53)), 378, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,5,53)), 378, 0);
    SPLINE_ADDPOINT(1, 7, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,13,55)), 345, script2808(varclient_1065, pos(0,70,91,21,54), pos(0,70,91,17,55)), 355, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 875 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), comp(89, 0));
    return;
}