//
function script14773(int0: number): void {
    CC_DELETEALL(comp(656, 10));  // collection_log:info_header_background_layer
    CC_DELETEALL(comp(656, 11));  // collection_log:info_header_build_layer
    CC_DELETEALL(comp(656, 17));  // collection_log:info_contents_background_layer
    CC_DELETEALL(comp(656, 21));  // collection_log:info_contents_build_layer
    CC_DELETEALL(comp(656, 20));  // collection_log:info_contents_control_layer
    CC_DELETEALL(comp(656, 23));  // collection_log:info_footer_background_layer
    CC_DELETEALL(comp(656, 24));  // collection_log:info_footer_build_layer
    CC_DELETEALL(comp(656, 25));  // collection_log:info_footer_control_layer
    var int1 = dbrow_getfield(varplayer_9212, 340080, varplayer_9213);
    var int2 = script14510(int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    if ((dbrow_getfield(varplayer_9212, 340016, 0) == 1)) {
        int3 = 20;
    };
    if ((dbrow_getfield(int1, 344192, 0) == 1)) {
        int4 = 20;
        IF_SETHIDE(false, comp(656, 13));  // collection_log:options_graphic
    } else {
        IF_SETHIDE(true, comp(656, 13));  // collection_log:options_graphic
    };
    int5 = script14766(42991626, 42991627, int1, 0, 0, IF_GETWIDTH(comp(656, 9)), int3, int4);  // collection_log:info_header_layer
    if ((IF_FIND(comp(656, 9)) == 1)) {  // collection_log:info_header_layer
        CC_SETSIZE(0, int5, 1, 0);
    };
    if ((int2 == 1)) {
        if ((script14501(int1) == 1)) {
            string0 = "Claim";
        } else {
            string0 = "Contribute All";
        };
    };
    int6 = script14768(42991639, 42991640, 42991641, int1, 0, 0, IF_GETWIDTH(comp(656, 22)), 0, string0);  // collection_log:info_footer_layer
    if ((IF_FIND(comp(656, 22)) == 1)) {  // collection_log:info_footer_layer
        CC_SETSIZE(0, int6, 1, 0);
    };
    if ((IF_FIND(comp(656, 16)) == 1)) {  // collection_log:info_contents_layer
        CC_SETPOSITION(0, int5, 0, 0);
        CC_SETSIZE(0, (int5 + int6), 1, 1);
    };
    int7 = script14767(42991633, 42991637, 42991636, int1, 0, 0, IF_GETWIDTH(comp(656, 16)), IF_GETHEIGHT(comp(656, 16)), (IF_GETWIDTH(comp(656, 16)) - 19), 0);  // collection_log:info_contents_layer
    var int8 = DB_GETFIELDCOUNT(int1, 344272);
    var int9 = -1;
    int9 = (int9 + 1);
    while ((int9 < int8)) {
        if ((CC_FIND(comp(656, 20), int9) == 1)) {  // collection_log:info_contents_control_layer
            if ((dbrow_getfield(int1, 344192, 0) == 1)) {
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
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(656, 18)), int7), comp(656, 18));  // collection_log:info_contents_scrolling_layer
    if ((int0 == 1)) {
        IF_SETSCROLLPOS(0, 0, comp(656, 18));  // collection_log:info_contents_scrolling_layer
    };
    script7791(42991635, 42991634);
    script14775();
    return;
}