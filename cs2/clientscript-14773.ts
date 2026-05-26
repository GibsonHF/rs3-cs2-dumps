//
function script14773(int0: number): void {
    CC_DELETEALL(42991626);
    CC_DELETEALL(42991627);
    CC_DELETEALL(42991633);
    CC_DELETEALL(42991637);
    CC_DELETEALL(42991636);
    CC_DELETEALL(42991639);
    CC_DELETEALL(42991640);
    CC_DELETEALL(42991641);
    var int1 = dbrow_getfield(varplayer_9212, 340080, varplayer_9213);
    var int2 = script14510(int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    if ((dbrow_getfield(varplayer_9212, 340016, 0) == true)) {
        int3 = 20;
    };
    if ((dbrow_getfield(int1, 344192, 0) == true)) {
        int4 = 20;
        IF_SETHIDE(0, 42991629);
    } else {
        IF_SETHIDE(1, 42991629);
    };
    int5 = script14766(42991626, 42991627, int1, 0, 0, IF_GETWIDTH(42991625), int3, int4);
    if ((IF_FIND(42991625) == 1)) {
        CC_SETSIZE(0, int5, 1, 0);
    };
    if ((int2 == 1)) {
        if ((script14501(int1) == 1)) {
            string0 = "Claim";
        } else {
            string0 = "Contribute All";
        };
    };
    int6 = script14768(42991639, 42991640, 42991641, int1, 0, 0, IF_GETWIDTH(42991638), 0, string0);
    if ((IF_FIND(42991638) == 1)) {
        CC_SETSIZE(0, int6, 1, 0);
    };
    if ((IF_FIND(42991632) == 1)) {
        CC_SETPOSITION(0, int5, 0, 0);
        CC_SETSIZE(0, (int5 + int6), 1, 1);
    };
    int7 = script14767(42991633, 42991637, 42991636, int1, 0, 0, IF_GETWIDTH(42991632), IF_GETHEIGHT(42991632), (IF_GETWIDTH(42991632) - 19), 0);
    var int8 = DB_GETFIELDCOUNT(int1, 344272);
    var int9 = -1;
    while ((++int9 < int8)) {
        if ((CC_FIND(42991636, int9) == 1)) {
            if ((dbrow_getfield(int1, 344192, 0) == true)) {
                CC_SETOPCURSOR(1, 44);
                CC_SETOP(1, "Share");
            };
            if ((int2 == 1)) {
                CC_SETOPCURSOR(2, 204);
                CC_SETOP(2, "Contribute");
            };
            CC_SETOP(10, "Examine");
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(42991634), int7), 42991634);
    if ((int0 == 1)) {
        IF_SETSCROLLPOS(0, 0, 42991634);
    };
    script7791(42991635, 42991634);
    script14775();
    return;
}