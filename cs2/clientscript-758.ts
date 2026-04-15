//
function script758(int0: int, int1: int): [component, int] {
    var int2 = -1;
    if ((IF_GETHIDE(comp(1270, 67)) == false)) {
        int2 = script6133(varclient_1889, varclient_1890, varclient_1894, varclient_1895);
        if ((int2 < 400)) {
            return [comp(1270, 67), 0];
        };
        if ((int2 < 1600)) {
            return [comp(1270, 67), 1];
        };
    };
    if ((IF_GETHIDE(comp(1270, 68)) == false)) {
        int2 = script6133(varclient_1889, varclient_1890, varclient_1896, varclient_1897);
        if ((int2 < 400)) {
            return [comp(1270, 68), 0];
        };
        if ((int2 < 1600)) {
            return [comp(1270, 68), 1];
        };
    };
    if ((IF_GETHIDE(comp(1270, 69)) == false)) {
        int2 = script6133(varclient_1889, varclient_1890, varclient_1898, varclient_1899);
        if ((int2 < 400)) {
            return [comp(1270, 69), 0];
        };
        if ((int2 < 1600)) {
            return [comp(1270, 69), 1];
        };
    };
    return [comp(1270, 16), -1];
}