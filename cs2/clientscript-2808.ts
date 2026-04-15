//
function script2808(int0: coordgrid, int1: coordgrid, int2: coordgrid): coordgrid {
    var int3 = MOVECOORD(pos(0,0,0,0,0), (8 * (COORDX(int1) / 8)), COORDY(int1), (8 * (COORDZ(int1) / 8)));
    var int4 = (COORDX(int2) - COORDX(int3));
    var int5 = (COORDZ(int2) - COORDZ(int3));
    return MOVECOORD(int0, int4, 0, int5);
}