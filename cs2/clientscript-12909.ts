//
function script12909(int0: number, int1: number): [number, number] {
    if ((script133(20977024, 829412991, varclient_1323) == 1)) {
        var int0 = (int0 + ABS((COORDX(20977024) - COORDX(30411712))));
        var int1 = (int1 - ABS((COORDZ(20977024) - COORDZ(30411712))));
    } else if ((script133(30411840, 836750463, varclient_1323) == 1)) {
        int0 = (int0 + ABS((COORDX(30411840) - COORDX(35654400))));
        int1 = (int1 - ABS((COORDZ(30411840) - COORDZ(35654400))));
    } else if ((script133(85985280, 631228991, varclient_1323) == 1)) {
        int0 = (int0 - ABS((COORDX(85985280) - COORDX(61870016))));
        int1 = (int1 + ABS((COORDZ(85985280) - COORDZ(61870016))));
    };
    return [int0, int1];
}