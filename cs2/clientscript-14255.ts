//
function script14255(): void {
    var int0 = -1 as dbrow;
    var string0 = "";
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    while ((++int5 <= 2)) {
        switch (int5) {
            case 1: {
                int0 = script438(varbitplayer_42234);
                int1 = comp(491, 9);
                int2 = comp(491, 25);
                int3 = comp(491, 12);
                int4 = comp(491, 5);
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_42235);
                int1 = comp(491, 13);
                int2 = comp(491, 27);
                int3 = comp(491, 16);
                int4 = comp(491, 3);
                break;
            }
        };
        string0 = dbrow_getfield(int0, 503824, 0);
        IF_SETTEXT(string0, int2);
        IF_SETTEXT(dbrow_getfield(int0, 503840, 0), int3);
        script446(int1, int0, 1);
        script447(int4, int0);
        script19994(int4, int1, int0);
    };
    return;
}