//
function script4005(int0: int, int1: int): [int, int] {
    if ((script133(pos(0,20,86,1,0), pos(3,22,89,61,63), COORD()) == 1)) {
        var int0 = (int0 + ABS((COORDX(pos(0,20,86,1,0)) - COORDX(pos(0,29,47,0,0)))));
        var int1 = (int1 - ABS((COORDZ(pos(0,20,86,1,0)) - COORDZ(pos(0,29,47,0,0)))));
    } else if ((script133(pos(0,29,49,0,0), pos(3,29,49,60,63), COORD()) == 1)) {
        int0 = (int0 + ABS((COORDX(pos(0,29,49,0,0)) - COORDX(pos(0,34,44,0,0)))));
        int1 = (int1 - ABS((COORDZ(pos(0,29,49,0,0)) - COORDZ(pos(0,34,44,0,0)))));
    } else if ((script133(pos(0,82,32,0,0), pos(2,89,40,60,63), COORD()) == 1)) {
        int0 = (int0 - ABS((COORDX(pos(0,82,32,0,0)) - COORDX(pos(0,59,63,0,0)))));
        int1 = (int1 + ABS((COORDZ(pos(0,82,32,0,0)) - COORDZ(pos(0,59,63,0,0)))));
    };
    return [int0, int1];
}