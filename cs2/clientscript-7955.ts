//
function script7955(int0: coordgrid): void {
    var string0 = COORD_GRIDTOFINE(int0, 1);
    COORDY_FINE(string0, 0, 0, 0, string0);
    MOVECOORD_FINE(stack(), operator("-", stack()), 0);
    string0 = stack();
    COORDX_FINE(string0);
    varclient_3524 = stack();
    stack(string0);
    varclient_3525 = COORDZ_FINE();
    script7952();
    return;
}