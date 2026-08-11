//
function script1376(int0: number, int1: number, int2: number): void {
    var string0 = "";
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int3, int4, int5, int6] = script2956();
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1422, 39));  // worldmap_v2_ui:funclistframe
        varbitclient_21369 = 0;
        IF_SETOP(1, "Hide key", comp(1422, 84));  // worldmap_v2_ui:funclisttoggle_active_layer
        IF_SETSIZE((int3 + IF_GETWIDTH(comp(1422, 39) /*worldmap_v2_ui:funclistframe*/)), IF_GETHEIGHT(comp(1422, 78) /*worldmap_v2_ui:bottombar*/), 1, 1, int1);
        string0 = "Hide key";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1422, 84));  // worldmap_v2_ui:funclisttoggle_active_layer
    } else {
        IF_SETHIDE(true, comp(1422, 39));  // worldmap_v2_ui:funclistframe
        varbitclient_21369 = 1;
        IF_SETOP(1, "Show key", comp(1422, 84));  // worldmap_v2_ui:funclisttoggle_active_layer
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1422, 78)), 1, 1, int1);  // worldmap_v2_ui:bottombar
        string0 = "Show key";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1422, 84));  // worldmap_v2_ui:funclisttoggle_active_layer
    };
    script2046(int1);
    IF_SETONOP(callback(script1375, int1, int2), comp(1422, 84));  // worldmap_v2_ui:funclisttoggle_active_layer
    return;
}