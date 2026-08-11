//
function script2823(): void {
    SPLINE_NEW(0, 7);
    SPLINE_NEW(1, 7);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, 40636184, 41029429), 378, script2808(varclient_1065, 40636184, 41062196), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, 40636184, 41127727), 210, script2808(varclient_1065, 40636184, 41127728), 210, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, 40636184, 41062198), 378, script2808(varclient_1065, 40636184, 41045814), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, 40636184, 41144113), 210, script2808(varclient_1065, 40636184, 41144114), 210, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, 40636184, 40996661), 378, script2808(varclient_1065, 40636184, 40963893), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, 40636184, 41160499), 210, script2808(varclient_1065, 40636184, 41160500), 210, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, 40636184, 40931123), 378, script2808(varclient_1065, 40636184, 40931121), 378, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, 40636184, 41160501), 210, script2808(varclient_1065, 40636184, 41160502), 210, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, 40636184, 40963888), 378, script2808(varclient_1065, 40636184, 40996655), 378, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, 40636184, 41160504), 210, script2808(varclient_1065, 40636184, 41160505), 210, 0);
    SPLINE_ADDPOINT(0, 5, script2808(varclient_1065, 40636184, 41062192), 378, script2808(varclient_1065, 40636184, 41078576), 378, 0);
    SPLINE_ADDPOINT(1, 5, script2808(varclient_1065, 40636184, 41160507), 210, script2808(varclient_1065, 40636184, 41160508), 210, 0);
    SPLINE_ADDPOINT(0, 6, script2808(varclient_1065, 40636184, 41094960), 378, script2808(varclient_1065, 40636184, 41111344), 378, 0);
    SPLINE_ADDPOINT(1, 6, script2808(varclient_1065, 40636184, 41160510), 210, script2808(varclient_1065, 40636184, 41160512), 210, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 879 as cs2enum;
    script2825(0);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 0), comp(89, 0));  // fade2:eventlayer
    return;
}