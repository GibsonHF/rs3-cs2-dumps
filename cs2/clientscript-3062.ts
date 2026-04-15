//[proc,lobbyscreen_entergame]
function script3062(int0: component): unknown_int {
    var int1 = 0;
    var string0 = "";
    var int2 = 0;
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    var string2 = "";
    IF_SETHIDE(true, comp(906, 148));
    if (((varclient_1100 == 42) || (varclient_1100 == 43))) {
        return 0;
    };
    if ((WORLDLIST_FETCH() == 0)) {
        script3064(false);
        IF_SETONTIMER(callback(script3061, int0), int0);
        return 0;
    };
    stack(WORLDLIST_SPECIFIC(MAP_WORLD()));
    [int1, string0, int2, string1, int3, int4, string2] = stack();
    if ((int3 < 0)) {
        script3093(-5, 4036 as dbrow, "Connection Failed", "Could not connect you to the chosen world. Please choose another.", 2608, "", "Back");
        script3064(true);
        IF_SETONTIMER(callback(), int0);
        return 0;
    };
    if (((TESTBIT(int1, 24) == 1) || (varbitplayer_58378 == 1))) {
        IF_TRIGGEROP(comp(906, 2), -1, 1);
    };
    varclient_1322 = false;
    script3064(true);
    IF_SETONTIMER(callback(), int0);
    script3097();
    varclient_1100 = -1;
    if (((script2727() == 1) && (varclient_547 == 0))) {
        IF_SETHIDE(false, comp(906, 101));
        unk11087(9265, 0, 160);
        return 0;
    };
    varclient_200 = 0;
    varclient_1745 = false;
    if ((varplayer_1747 > 0)) {
        script5861(varplayer_1747);
    };
    script3064(false);
    LOBBY_ENTERGAME(varclient_4192, varclient_4193);
    DETAILGET_SOUNDVOL();
    var int5 = stack();
    DETAILGET_MUSICVOL();
    var int6 = stack();
    DETAILGET_BGSOUNDVOL();
    var int7 = stack();
    DETAILGET_SPEECHVOL();
    var int8 = stack();
    var int9 = DETAILGET_LOGINVOL();
    IF_SETONTIMER(callback(script3063, int0, MAP_WORLD(), int5, int6, int7, int8, int9), int0);
    return 1;
}