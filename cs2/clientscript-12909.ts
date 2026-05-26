//
function script12909(int0: number, int1: number): [number, number] {
    if ((script133(20977024, 829412991, varclient_1323) == 1)) {
        var int0 = (int0 + ABS((COORDX(pos(0,20,86,1,0)) - COORDX(pos(0,29,47,0,0)))));
        var int1 = (int1 - ABS((COORDZ(pos(0,20,86,1,0)) - COORDZ(pos(0,29,47,0,0)))));
    } else if ((script133(30411840, 836750463, varclient_1323) == 1)) {
        int0 = (int0 + ABS((COORDX(pos(0,29,49,0,0)) - COORDX(pos(0,34,44,0,0)))));
        int1 = (int1 - ABS((COORDZ(pos(0,29,49,0,0)) - COORDZ(pos(0,34,44,0,0)))));
    } else if ((script133(85985280, 631228991, varclient_1323) == 1)) {
        int0 = (int0 - ABS((COORDX(pos(0,82,32,0,0)) - COORDX(pos(0,59,63,0,0)))));
        int1 = (int1 + ABS((COORDZ(pos(0,82,32,0,0)) - COORDZ(pos(0,59,63,0,0)))));
    };
    return [int0, int1];
}