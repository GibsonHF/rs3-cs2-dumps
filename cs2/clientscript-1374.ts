//[proc,worldmap_showoverview]
function script1374(int0: number): void {
    var string0 = "";
    if ((int0 == 1)) {
        IF_SETHIDE(0, 93192226);
        varbitclient_21368 = 0;
        IF_SETOP(1, "Hide overview", 93192283);
        IF_SETSIZE(IF_GETWIDTH(93192231), IF_GETHEIGHT(93192226), 0, 1, 93192231);
        string0 = "Hide overview";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 93192283);
    } else {
        IF_SETHIDE(1, 93192226);
        varbitclient_21368 = 1;
        IF_SETOP(1, "Show overview", 93192283);
        IF_SETSIZE(IF_GETWIDTH(93192231), 0, 0, 1, 93192231);
        string0 = "Show overview";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 93192283);
    };
    IF_SETONOP(callback(script1373), 93192283);
    script9581(93192234);
    script9622(93192258, 93192259);
    return;
}