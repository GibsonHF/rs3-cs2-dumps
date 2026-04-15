//
function script5778(): int {
    if ((varplayer_8969 > 0)) {
        return varplayer_8969;
    };
    var int0 = 1820;
    var int1 = script20009();
    if ((int1 == 0)) {
        int0 = (int0 - 540);
    };
    if ((script9308() == 0)) {
        int0 = (int0 - 20);
    };
    int0 = (int0 - (50 * (15 - script9850())));
    int0 = (int0 - (250 * (1 - script17030())));
    if (((script20381() == 0) && (int1 == 0))) {
        int0 = (int0 - 100);
    };
    if ((varplayer_12314 > 0)) {
        int0 = 1820;
    };
    if (((int0 > 0) && (int0 <= 1820))) {
        varplayer_8969 = int0;
        return int0;
    };
    script12478(`Total free slots available calculated to: ${inttostring(int0, 10)}  - expected 0 to ${inttostring(1820, 10)}`);
    varplayer_8969 = 160;
    return 160;
}