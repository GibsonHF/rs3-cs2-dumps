//
function script18014(): int {
    if (((varbitplayer_54111 == 0) && (script17852() == 1))) {
        return 1;
    };
    script17927();
    if ((varclient_7302 > 0)) {
        return varclient_7302;
    };
    var int0 = script17862(7906 as dbrow);
    if ((script17868(varplayer_11339, int0) == true)) {
        int0 = (int0 + 1);
    };
    int0 = script12377(int0, 1, script17892(varplayer_11339));
    return int0;
}