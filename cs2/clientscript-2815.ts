//
function script2815(): void {
    SPLINE_NEW(0, 4);
    SPLINE_NEW(1, 4);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, 73750262, 74110714), 378, script2808(varclient_1065, 73750262, 74077947), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, 73750262, 74045178), 210, script2808(varclient_1065, 73750262, 74028794), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, 73750262, 74077946), 378, script2808(varclient_1065, 73750262, 74061562), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, 73750262, 74012410), 335, script2808(varclient_1065, 73750262, 73996026), 325, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, 73750262, 74045176), 378, script2808(varclient_1065, 73750262, 74045175), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, 73750262, 73979640), 346, script2808(varclient_1065, 73750262, 73979639), 346, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, 73750262, 73996016), 670, script2808(varclient_1065, 73750262, 73963244), 785, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, 73750262, 73996022), 210, script2808(varclient_1065, 73750262, 73996021), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 877 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), 5832704);
    return;
}