//
function script10774(): void {
    var int0 = IF_GETWIDTH(comp(1560, 6));  // player_inspect:content_layer
    var int1 = IF_GETHEIGHT(comp(1560, 6));  // player_inspect:content_layer
    var string0 = "";
    if ((int0 < (2 * 224))) {
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 17));  // player_inspect:ragdoll_layer
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 18));  // player_inspect:combat_layer
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 19));  // player_inspect:stats_layer
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 20));  // player_inspect:social_layer
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 22));  // player_inspect:cheevo_layer
        IF_SETSIZE(0, 28, 1, 0, comp(1560, 9));  // player_inspect:left_panel_tabs_layer
        IF_SETSIZE(0, (28 - 1), 1, 1, comp(1560, 7));  // player_inspect:left_panel_bg_layer
        IF_SETHIDE(false, comp(1560, 2));  // player_inspect:left_combat_tab_layer
        IF_SETHIDE(false, comp(1560, 3));  // player_inspect:left_stats_tab_layer
        IF_SETHIDE(false, comp(1560, 1));  // player_inspect:left_social_tab_layer
        IF_SETHIDE(false, comp(1560, 10));  // player_inspect:left_cheevo_tab_layer
        IF_SETHIDE(true, comp(1560, 12));  // player_inspect:right_panel_tabs_layer
        IF_SETHIDE(true, comp(1560, 8));  // player_inspect:right_panel_bg_layer
        varclient_4665 = 0;
        string0 = "Expand";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), comp(1560, 94));  // player_inspect:expand_button_active_layer
    } else {
        IF_SETSIZE(224, 28, 0, 1, comp(1560, 17));  // player_inspect:ragdoll_layer
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 18));  // player_inspect:combat_layer
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 19));  // player_inspect:stats_layer
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 20));  // player_inspect:social_layer
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 22));  // player_inspect:cheevo_layer
        IF_SETSIZE(224, 28, 0, 0, comp(1560, 9));  // player_inspect:left_panel_tabs_layer
        IF_SETSIZE(224, (28 - 1), 0, 1, comp(1560, 7));  // player_inspect:left_panel_bg_layer
        IF_SETHIDE(true, comp(1560, 2));  // player_inspect:left_combat_tab_layer
        IF_SETHIDE(true, comp(1560, 3));  // player_inspect:left_stats_tab_layer
        IF_SETHIDE(true, comp(1560, 1));  // player_inspect:left_social_tab_layer
        IF_SETHIDE(true, comp(1560, 10));  // player_inspect:left_cheevo_tab_layer
        IF_SETSIZE(224, 28, 1, 0, comp(1560, 12));  // player_inspect:right_panel_tabs_layer
        IF_SETHIDE(false, comp(1560, 12));  // player_inspect:right_panel_tabs_layer
        IF_SETSIZE(224, (28 - 1), 1, 1, comp(1560, 8));  // player_inspect:right_panel_bg_layer
        IF_SETHIDE(false, comp(1560, 8));  // player_inspect:right_panel_bg_layer
        varclient_4665 = 1;
        string0 = "Collapse";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), comp(1560, 94));  // player_inspect:expand_button_active_layer
    };
    script10776(varclient_4666);
    return;
}