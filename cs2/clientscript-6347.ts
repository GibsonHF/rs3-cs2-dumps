//
function script6347(int0: unknown_int): void {
    var int1 = CLIENTOPTION_GET(22);
    var int2 = CLIENTOPTION_GET(23);
    var int3 = CLIENTOPTION_GET(24);
    var int4 = CLIENTOPTION_GET(25);
    var int5 = CLIENTOPTION_GET(26);
    if ((varplayer_1754 != 0)) {
        if ((((varclient_1882 == 1) && (PLAYERMEMBER() == false)) && (USERDETAIL_LOBBY_PLAYAGE() > 0))) {
            IF_SETONTIMER(callback(script1999, 59375616, 0, int1, int2, int3, int4, int5), 59375616);
        } else {
            IF_SETONTIMER(callback(), comp(906, 0));
            script1299();
        };
        varclient_1882 = 0;
    };
    return;
}