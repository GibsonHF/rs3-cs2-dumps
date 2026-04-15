//
function script6219(int0: coordgrid): coordgrid {
    var int1 = script284(COORD());
    var int2 = (COORDX(int0) - COORDX(pos(0,22,95,1,0)));
    var int3 = (COORDZ(int0) - COORDZ(pos(0,22,95,1,0)));
    return MOVECOORD(int1, int2, 0, int3);
}