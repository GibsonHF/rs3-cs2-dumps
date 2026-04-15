//[clientscript,evilbob_start]
function script2115(int0: unknown_int, int1: component): void {
    if ((script42(varclient_679) == 0)) {
        return;
    };
    IF_SETHIDE(false, int1);
    if (((varclient_677 == -1 as coordgrid) || (varclient_678 == -1 as coordgrid))) {
        return;
    };
    if (((varclient_675 == -1 as coordgrid) || (varclient_676 == -1 as coordgrid))) {
        varclient_675 = pos(0,53,75,57,41);
        varclient_676 = pos(0,53,75,61,40);
    };
    var int2 = (RANDOMINC(50) + 50);
    SPLINE_NEW(0, 2);
    SPLINE_ADDPOINT(0, 0, varclient_675, 450, varclient_675, (450 + (int2 / 2)), 0);
    SPLINE_ADDPOINT(0, 1, varclient_676, (450 + int2), varclient_676, (450 + (int2 * 2)), 0);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(1, 0, varclient_677, 250, varclient_677, 250, 0);
    SPLINE_ADDPOINT(1, 1, varclient_678, 150, varclient_678, 150, 0);
    CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
    return;
}