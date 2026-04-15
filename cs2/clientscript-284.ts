//
function script284(int0: coordgrid): coordgrid {
    var int1 = COORDX(int0);
    var int2 = COORDZ(int0);
    int1 = (int1 - MODULO(int1, 64));
    int2 = (int2 - MODULO(int2, 64));
    return MOVECOORD(pos(0,0,0,0,0), int1, 0, int2);
}