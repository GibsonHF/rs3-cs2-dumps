//
function script15857(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 557104, 0);
    if (((((int1 == -1) || (int2 == -1)) || (int3 == -1)) || (int4 == -1))) {
        IF_SETHIDE(true, comp(857, 20));  // mobile_chat_panel:tabs_layer
        return;
    };
    IF_SETGRAPHIC(14719 as graphic, comp(857, 23));  // mobile_chat_panel:tab1_bg
    IF_SETGRAPHIC(-1 as graphic, comp(857, 25));  // mobile_chat_panel:tab1_icon
    IF_SETGRAPHIC(14719 as graphic, comp(857, 26));  // mobile_chat_panel:tab2_bg
    IF_SETGRAPHIC(-1 as graphic, comp(857, 27));  // mobile_chat_panel:tab2_icon
    var string0 = IF_GETTEXT(comp(857, 18));  // mobile_chat_panel:main_title
    IF_SETOPBASE(string0, comp(857, 22));  // mobile_chat_panel:tab_1
    IF_SETOPBASE(strconcat(string0, " List"), comp(857, 24));  // mobile_chat_panel:tab_2
    if ((varclient_6910 == 0)) {
        IF_SETGRAPHIC(14720 as graphic, comp(857, 23));  // mobile_chat_panel:tab1_bg
        IF_SETGRAPHIC(int2, comp(857, 25));  // mobile_chat_panel:tab1_icon
        IF_SETTEXT("Channel", comp(857, 19));  // mobile_chat_panel:secondary_title
        IF_SETGRAPHIC(int3, comp(857, 27));  // mobile_chat_panel:tab2_icon
        IF_SENDTOFRONT(comp(857, 22));  // mobile_chat_panel:tab_1
    } else {
        IF_SETGRAPHIC(14720 as graphic, comp(857, 26));  // mobile_chat_panel:tab2_bg
        IF_SETGRAPHIC(int4, comp(857, 27));  // mobile_chat_panel:tab2_icon
        IF_SETTEXT("List", comp(857, 19));  // mobile_chat_panel:secondary_title
        IF_SETGRAPHIC(int1, comp(857, 25));  // mobile_chat_panel:tab1_icon
        IF_SENDTOFRONT(comp(857, 24));  // mobile_chat_panel:tab_2
    };
    return;
}