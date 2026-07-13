//
function script20783(int0: number): number {
    if ((((varplayer_12917 == -1 as coordgrid) || (varplayer_12918 == -1 as coordgrid)) || (int0 == -1 as coordgrid))) {
        return 0;
    };
    if ((COORDY(COORD()) != COORDY(int0))) {
        return 0;
    };
    var int1 = COORDX(int0);
    if (((int1 < COORDX(varplayer_12917)) || (int1 > COORDX(varplayer_12918)))) {
        return 0;
    };
    var int2 = COORDZ(int0);
    if (((int2 < COORDZ(varplayer_12917)) || (int2 > COORDZ(varplayer_12918)))) {
        return 0;
    };
    return 1;
}