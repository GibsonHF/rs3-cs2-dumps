//
function script14773(int0: unknown_int): void {
    CC_DELETEALL(comp(656, 10));
    CC_DELETEALL(comp(656, 11));
    CC_DELETEALL(comp(656, 17));
    CC_DELETEALL(comp(656, 21));
    CC_DELETEALL(comp(656, 20));
    CC_DELETEALL(comp(656, 23));
    CC_DELETEALL(comp(656, 24));
    CC_DELETEALL(comp(656, 25));
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
        IF_SETHIDE(false, comp(656, 13));
    } else {
        IF_SETHIDE(true, comp(656, 13));
    };
    int5 = script14766(comp(656, 10), comp(656, 11), int1, 0, 0, IF_GETWIDTH(comp(656, 9)), int3, int4);
    if ((IF_FIND(comp(656, 9)) == 1)) {
        CC_SETSIZE(0, int5, 1, 0);
    };
    if ((int2 == 1)) {
        if ((script14501(int1) == 1)) {
            string0 = "Claim";
        } else {
            string0 = "Contribute All";
        };
    };
    int6 = script14768(comp(656, 23), comp(656, 24), comp(656, 25), int1, 0, 0, IF_GETWIDTH(comp(656, 22)), 0, string0);
    if ((IF_FIND(comp(656, 22)) == 1)) {
        CC_SETSIZE(0, int6, 1, 0);
    };
    if ((IF_FIND(comp(656, 16)) == 1)) {
        CC_SETPOSITION(0, int5, 0, 0);
        CC_SETSIZE(0, (int5 + int6), 1, 1);
    };
    int7 = script14767(comp(656, 17), comp(656, 21), 42991636, int1, 0, 0, IF_GETWIDTH(comp(656, 16)), IF_GETHEIGHT(comp(656, 16)), (IF_GETWIDTH(comp(656, 16)) - 19), 0);
    var int8 = DB_GETFIELDCOUNT(int1, 344272);
    var int9 = -1;
    while ((++int9 < int8)) {
        if ((CC_FIND(comp(656, 20), int9) == 1)) {
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
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(656, 18)), int7), comp(656, 18));
    if ((int0 == 1)) {
        IF_SETSCROLLPOS(0, 0, comp(656, 18));
    };
    script7791(comp(656, 19), comp(656, 18));
    script14775();
    return;
}