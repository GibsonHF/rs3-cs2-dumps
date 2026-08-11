//[proc,worldmap_showoverview]
function script1374(int0: number): void {
    var string0 = "";
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1422, 34));  // worldmap_v2_ui:overviewframe
        varbitclient_21368 = 0;
        IF_SETOP(1, "Hide overview", comp(1422, 91));  // worldmap_v2_ui:overviewtoggle_active_layer
        IF_SETSIZE(IF_GETWIDTH(comp(1422, 39) /*worldmap_v2_ui:funclistframe*/), IF_GETHEIGHT(comp(1422, 34) /*worldmap_v2_ui:overviewframe*/), 0, 1, comp(1422, 39) /*worldmap_v2_ui:funclistframe*/);
        string0 = "Hide overview";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1422, 91));  // worldmap_v2_ui:overviewtoggle_active_layer
    } else {
        IF_SETHIDE(true, comp(1422, 34));  // worldmap_v2_ui:overviewframe
        varbitclient_21368 = 1;
        IF_SETOP(1, "Show overview", comp(1422, 91));  // worldmap_v2_ui:overviewtoggle_active_layer
        IF_SETSIZE(IF_GETWIDTH(comp(1422, 39)), 0, 0, 1, comp(1422, 39));  // worldmap_v2_ui:funclistframe
        string0 = "Show overview";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1422, 91));  // worldmap_v2_ui:overviewtoggle_active_layer
    };
    IF_SETONOP(callback(script1373), comp(1422, 91));  // worldmap_v2_ui:overviewtoggle_active_layer
    script9581(93192234);
    script9622(93192258, 93192259);
    return;
}