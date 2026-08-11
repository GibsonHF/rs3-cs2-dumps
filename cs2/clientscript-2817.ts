//
function script2817(): void {
    SPLINE_NEW(0, 8);
    SPLINE_NEW(1, 8);
    SPLINE_ADDPOINT(0, 0, script2808(varclient_1065, 73750262, 73701111), 378, script2808(varclient_1065, 73750262, 73717495), 378, 0);
    SPLINE_ADDPOINT(1, 0, script2808(varclient_1065, 73750262, 73750263), 325, script2808(varclient_1065, 73750262, 73766647), 295, 0);
    SPLINE_ADDPOINT(0, 1, script2808(varclient_1065, 73750262, 73733879), 378, script2808(varclient_1065, 73750262, 73750263), 378, 0);
    SPLINE_ADDPOINT(1, 1, script2808(varclient_1065, 73750262, 73783031), 330, script2808(varclient_1065, 73750262, 73799415), 335, 0);
    SPLINE_ADDPOINT(0, 2, script2808(varclient_1065, 73750262, 73766647), 378, script2808(varclient_1065, 73750262, 73783031), 378, 0);
    SPLINE_ADDPOINT(1, 2, script2808(varclient_1065, 73750262, 73815799), 330, script2808(varclient_1065, 73750262, 73832183), 350, 0);
    SPLINE_ADDPOINT(0, 3, script2808(varclient_1065, 73750262, 73799415), 378, script2808(varclient_1065, 73750262, 73815799), 378, 0);
    SPLINE_ADDPOINT(1, 3, script2808(varclient_1065, 73750262, 73848567), 325, script2808(varclient_1065, 73750262, 73864951), 305, 0);
    SPLINE_ADDPOINT(0, 4, script2808(varclient_1065, 73750262, 73832183), 378, script2808(varclient_1065, 73750262, 73848567), 378, 0);
    SPLINE_ADDPOINT(1, 4, script2808(varclient_1065, 73750262, 73881335), 340, script2808(varclient_1065, 73750262, 73897719), 325, 0);
    SPLINE_ADDPOINT(0, 5, script2808(varclient_1065, 73750262, 73864950), 378, script2808(varclient_1065, 73750262, 73881333), 378, 0);
    SPLINE_ADDPOINT(1, 5, script2808(varclient_1065, 73750262, 73914103), 330, script2808(varclient_1065, 73750262, 73930487), 340, 0);
    SPLINE_ADDPOINT(0, 6, script2808(varclient_1065, 73750262, 73897717), 378, script2808(varclient_1065, 73750262, 73914101), 378, 0);
    SPLINE_ADDPOINT(1, 6, script2808(varclient_1065, 73750262, 73946871), 346, script2808(varclient_1065, 73750262, 73963255), 346, 0);
    SPLINE_ADDPOINT(0, 7, script2808(varclient_1065, 73750262, 73930485), 378, script2808(varclient_1065, 73750262, 73946869), 378, 0);
    SPLINE_ADDPOINT(1, 7, script2808(varclient_1065, 73750262, 73979639), 345, script2808(varclient_1065, 73750262, 73996023), 355, 0);
    varclient_1065 = -1 as coordgrid;
    varclient_1064 = 0;
    varclient_1067 = 875 as cs2enum;
    script2825(1);
    script2810(5832706);
    IF_SETONCAMFINISHED(callback(script2824, 1), comp(89, 0));  // fade2:eventlayer
    return;
}