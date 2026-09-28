//
function script5779(): [number, number, number, number] {
    if ((varplayer_12314 > 0)) {
        return [1920, 1920, 17, 1];
    };
    var int0 = 1920;
    var int1 = script9850();
    var int2 = script17030();
    if ((script9308() == 0)) {
        int0 = (int0 - 20);
    };
    int0 = (int0 - (50 * (17 - int1)));
    int0 = (int0 - (250 * (1 - int2)));
    if ((script20381() == 0)) {
        int0 = (int0 - 100);
    };
    return [int0, (int0 - 540), int1, int2];
}