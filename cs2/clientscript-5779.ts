//
function script5779(): [int, int, int, int] {
    if ((varplayer_12314 > 0)) {
        return [1820, 1820, 15, 1];
    };
    var int0 = 1820;
    var int1 = script9850();
    var int2 = script17030();
    if ((script9308() == 0)) {
        int0 = (int0 - 20);
    };
    int0 = (int0 - (50 * (15 - int1)));
    int0 = (int0 - (250 * (1 - int2)));
    if ((script20381() == 0)) {
        int0 = (int0 - 100);
    };
    return [int0, (int0 - 540), int1, int2];
}