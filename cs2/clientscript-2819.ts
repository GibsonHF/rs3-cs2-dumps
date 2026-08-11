//
function script2819(): void {
    SPLINE_NEW(0, 5);
    SPLINE_NEW(1, 5);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, 9437888, 10207993), 378, script2808(varclient_1065, 9437888, 10289912), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, 9437888, 10191601), 210, script2808(varclient_1065, 9437888, 10257133), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, 9437888, 10371817), 378, script2808(varclient_1065, 9437888, 10371810), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, 9437888, 10240743), 210, script2808(varclient_1065, 9437888, 10224357), 210, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, 9437888, 10240727), 378, script2808(varclient_1065, 9437888, 10175188), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, 9437888, 10109663), 210, script2808(varclient_1065, 9437888, 10044126), 210, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, 9437888, 9994963), 435, script2808(varclient_1065, 9437888, 9945813), 465, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, 9437888, 9945824), 210, script2808(varclient_1065, 9437888, 9945824), 210, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, 9437888, 9945817), 545, script2808(varclient_1065, 9437888, 9945818), 530, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, 9437888, 9945824), 210, script2808(varclient_1065, 9437888, 9945824), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 876 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), comp(89, 0));  // fade2:eventlayer
    return;
}