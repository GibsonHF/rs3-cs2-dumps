//
function script18871(int0: dbrow, int1: struct, int2: unknown_int, string0: string): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 150);
    IF_SETHIDE(false, comp(1284, 35));
    CC_DELETEALL(comp(1284, 45));
    CC_DELETEALL(comp(1284, 44));
    script2994(comp(1284, 45), 1, 0, 0, 1, 0, 259, 105, 0, 0, script18875(int0, int1, int2));
    var int3 = (CC_GETHEIGHT() + 5);
    var int4 = PARAHEIGHT(string0, 600, 41 as fontmetrics);
    script20480(comp(1284, 45), 2, 0, int3, 1, 0, 0, (int4 * 20), 1, 0, 17467 as dbrow, string0, -1, 1, 1);
    int3 = (int3 + (5 + (int4 * 20)));
    var string1 = "";
    if ((int0 != -1 as dbrow)) {
        string1 = script18872(int0, int2);
    } else if ((int1 != -1 as struct)) {
        string1 = script18873(int1, int2);
    };
    script20480(comp(1284, 45), 3, 0, int3, 1, 0, 100, 200, 1, 0, 2100 as dbrow, string1, -1, 0, 0);
    int4 = PARAHEIGHT(string1, CC_GETWIDTH(), 17 as fontmetrics);
    int3 = (int3 + (5 + (int4 * 16)));
    IF_SETSCROLLSIZE(0, int3, comp(1284, 45));
    IF_SETSCROLLPOS(0, 0, comp(1284, 45));
    script7791(comp(1284, 46), comp(1284, 45));
    script7223(comp(1284, 44), 1, 0, 0, 1, 0, 40, 0, 1, 0, script10495(8));
    script7223(comp(1284, 44), 2, 0, 1, 1, 0, 40, 0, 1, 0, script10495(7));
    script7852(comp(1284, 44), 3, -104, 0, 1, 1, 176, 30, 0, 0, 17061 as dbrow, "Back");
    CC_SETOP(1, "Back");
    CC_SETONOP(callback(script18880));
    var string2 = script18877(int2, int0);
    var int5 = dbrow_getfield(int0, 1167360, 0);
    var int6 = ((4 + (int2 * 599)) + int5);
    script7852(84148268, int6, 104, 0, 1, 1, 176, 30, 0, 0, 17062, string2);
    CC_SETOP(1, string2);
    var int7 = script18876(int0, int1, int2);
    if ((int7 == 0)) {
        CC_SETENABLED(false);
        CC_SETHIDE(true);
        if ((CC_FIND(comp(1284, 44), 3) == 1)) {
            CC_SETPOSITION(0, 0, 1, 1);
        };
    };
    CC_CREATE[1](comp(1284, 23), 0, int6);
    CC_SETOP[1](1, "Select");
    CC_SETSIZE[1](0, 0, 0, 0);
    IF_TRIGGEROP(comp(1284, 23), int6, 1);
    return;
}