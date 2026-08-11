//
function script6558(string0: string, string1: string): void {
    IF_SETHIDE(false, comp(1709, 7));  // invent_main:information_panel
    IF_SETTEXT(string0, comp(1709, 15));  // invent_main:material_title
    IF_SETTEXT(string1, comp(1709, 16));  // invent_main:material_description
    var int0 = script7593(IF_GETTEXT(comp(1709, 16)), IF_GETWIDTH(comp(1709, 16)), IF_GETFONTMETRICS(comp(1709, 16)), 0);  // invent_main:material_description
    IF_SETSIZE(10, int0, 1, 0, comp(1709, 16));  // invent_main:material_description
    int0 = (IF_GETY(comp(1709, 16)) + IF_GETHEIGHT(comp(1709, 16)));  // invent_main:material_description
    CC_DELETEALL(comp(1709, 17));  // invent_main:info_panel_scrollbar_layer
    IF_SETSIZE(0, 45, 1, 1, comp(1709, 14));  // invent_main:info_panel_scrolling_layer
    IF_SETSCROLLSIZE(0, 0, comp(1709, 14));  // invent_main:info_panel_scrolling_layer
    IF_SETSCROLLPOS(0, 0, comp(1709, 14));  // invent_main:info_panel_scrolling_layer
    if ((int0 > IF_GETHEIGHT(comp(1709, 14)))) {  // invent_main:info_panel_scrolling_layer
        IF_SETSIZE(16, 45, 1, 1, comp(1709, 14));  // invent_main:info_panel_scrolling_layer
        IF_SETSCROLLSIZE(0, int0, comp(1709, 14));  // invent_main:info_panel_scrolling_layer
        script7791(112001041, 112001038);
    };
    return;
}