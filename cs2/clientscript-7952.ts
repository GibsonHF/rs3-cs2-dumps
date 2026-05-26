//
function script7952(): void {
    var int0 = -50;
    var string0 = COORD_GRIDTOFINE(pos(0,0,0,0,0), 1);
    MOVECOORD_FINE(string0, 0, varclient_3524, 0, varclient_3525);
    var string1 = stack();
    MOVECOORD_FINE(string1, 0, 0, varclient_3521, int0);
    var string2 = stack();
    stack(string1);
    CAM2_SETLOOKATPOINT_POINT();
    CAM2_SETPOSITIONPOINT_POINT(string2);
    return;
}