//
function script2821(): void {
    SPLINE_NEW(0, 3);
    SPLINE_NEW(1, 3);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, 837292320, 32362799), 2385, script2808(varclient_1065, 837292320, 32330031), 2370, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, 837292320, 32379191), 2265, script2808(varclient_1065, 837292320, 32395576), 2260, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, 837292320, 32297264), 2420, script2808(varclient_1065, 837292320, 32264497), 2355, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, 837292320, 32379193), 2285, script2808(varclient_1065, 837292320, 32362809), 2235, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, 837292320, 32264499), 2395, script2808(varclient_1065, 837292320, 32248117), 2380, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, 837292320, 32346424), 2270, script2808(varclient_1065, 837292320, 32330040), 2250, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 878 as cs2enum;
    script2825(0);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 0), comp(89, 0));
    return;
}