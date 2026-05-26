//
function script14255(): void {
    var int0 = -1 as dbrow;
    var string0 = "";
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    while ((++int5 <= 2)) {
        switch (int5) {
            case 1: {
                int0 = script438(varbitplayer_42234);
                int1 = 32178185;
                int2 = 32178201;
                int3 = 32178188;
                int4 = 32178181;
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_42235);
                int1 = 32178189;
                int2 = 32178203;
                int3 = 32178192;
                int4 = 32178179;
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