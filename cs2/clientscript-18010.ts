//
function script18010(): void {
    if ((varplayer_11339 == -1 as dbrow)) {
        return;
    };
    var int0 = varplayer_11339;
    if ((DB_GETROWTABLE(int0) != 242)) {
        script12478("Invalid table.");
        return;
    };
    script18030(int0);
    var int1 = comp(1227, 40);
    CC_DELETEALL(int1);
    var int2 = comp(1227, 41);
    CC_DELETEALL(int2);
    var int3 = dbrow_getfield(int0, 991280, 0);
    var int4 = 100;
    var int5 = script18011();
    script10026(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, int5);
    script10026(int1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, int5);
    var int6 = script18020();
    var int7 = 1;
    var int8 = 0;
    while ((int7 <= int6)) {
        int8 = script18017(int7);
        if ((CC_FINDBYCATEGORY(int2, 0, 0) == 1)) {
            script15937(1, int7, 0, 0, 0, 0, 0, 0, 1, 1);
            script15937(2, int8, 0, 0, 0, 0, 0, 0, 1, 1);
        };
        if ((CC_FINDBYCATEGORY(int1, 0, 0) == 1)) {
            script15937(1, int7, 0, 0, 0, 0, 0, 0, 1, 1);
            script15937(2, int8, 0, 0, 0, 0, 0, 0, 1, 1);
        };
        int7 = (int7 + 1);
    };
    var int9 = comp(1227, 36);
    script17927();
    var int10 = (int6 * (int4 + int5));
    IF_SETSCROLLPOS(0, 0, int9);
    IF_SETSCROLLSIZE(int10, IF_GETHEIGHT(int9), int9);
    script11147(comp(1227, 35), int9);
    IF_SETONTIMER(callback(script18012, 15, 1, int0, 0, 3, 0, 3, 0), 80412705);
    return;
}