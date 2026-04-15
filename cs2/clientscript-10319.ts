//
function script10319(int0: component): void {
    var int1 = script10293(int0);
    var int2 = script10304(int0);
    var int3 = script10305(int0);
    var int4 = script10294(int0);
    var int5 = script10307(int0);
    var int6 = script10308(int0);
    var string0 = "";
    if ((PLAYER_GROUP_FIND() == 1)) {
        if ((varclient_4497 == 0)) {
            if ((strcmp(varclient_4626, "") == 0)) {
                script10321(int0);
            };
            stack(PLAYER_GROUP_GET_MAX_SIZE(inttostring(PLAYER_GROUP_MEMBER_COUNT(), 10), "/"));
            string0 = `${stack()}${inttostring(10)}`;
            IF_SETSIZE(PARAWIDTH(string0, 48, IF_GETFONTMETRICS(int4)), IF_GETHEIGHT(int4), 0, 0, int4);
            IF_SETTEXT(string0, int4);
            IF_SETHIDE(false, int5);
            IF_SETHIDE(true, int6);
        } else {
            script10320(int0);
            IF_SETSIZE(PARAWIDTH(string0, 48, IF_GETFONTMETRICS(int4)), IF_GETHEIGHT(int4), 0, 0, int4);
            IF_SETTEXT(string0, int4);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(false, int6);
        };
        script10327(int0, comp(-1, 65535));
    } else {
        script10328(int0, comp(-1, 65535));
        IF_SETHIDE(true, script10306(int0));
        IF_SETHIDE(true, script4244(int0));
        IF_SETSIZE(0, 33, 1, 1, script10310(int0));
        CC_DELETEALL(int1);
        CC_DELETEALL(int2);
        CC_DELETEALL(int3);
        script10629(int1, IF_GETNEXTSUBID(int1), IF_GETWIDTH(int1), IF_GETHEIGHT(int1), 0, 0, "You are not currently in a group.", 16777215, 28 as fontmetrics, 1, 1, 13, false);
    };
    return;
}