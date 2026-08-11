//
function script2394(int0: number): void {
    var string0 = "Join a Friends chat channel";
    if ((CLAN_GETCHATCOUNT() > 0)) {
        IF_SETOP(1, "Leave chat", comp(1927, 11));  // friendschat_buttons_dropdown:joinleave_button_active_layer
        IF_SETGRAPHIC(6255 as graphic, comp(1927, 12));  // friendschat_buttons_dropdown:joinleave_button_graphic
        string0 = "Leave the Friends chat channel";
    } else {
        IF_SETOP(1, "Join chat", comp(1927, 11));  // friendschat_buttons_dropdown:joinleave_button_active_layer
        IF_SETGRAPHIC(6256 as graphic, comp(1927, 12));  // friendschat_buttons_dropdown:joinleave_button_graphic
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1927, 11));  // friendschat_buttons_dropdown:joinleave_button_active_layer
    return;
}