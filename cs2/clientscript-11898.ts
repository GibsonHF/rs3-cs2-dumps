//
function script11898(): void {
    var int0 = MOVECOORD(pos(0,0,0,0,0), ((COORDX(COORD()) - MODULO(COORDX(COORD()), 64)) + 13), 0, ((COORDZ(COORD()) - MODULO(COORDZ(COORD()), 64)) + 23));
    CAM_FOLLOWCOORD(int0);
    CAM_LOOKAT(int0, 25, 1000, 1000);
    CAM_MOVETO(MOVECOORD(int0, 11, 0, 0), 2600, 1000, 1000);
    return;
}