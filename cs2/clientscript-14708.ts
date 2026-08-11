//
function script14708(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if (((script13749() == 1) && (IF_GETHIDE(comp(276, 27)) == false))) {  // toplevel_v2_mobile:chat_panel
        IF_SETHIDE(true, comp(512, 0));  // info_popup:bespoke_window
        return;
    };
    IF_SETHIDE(false, comp(512, 0));  // info_popup:bespoke_window
    var int2 = 0;
    if ((STRING_LENGTH(string1) > 0)) {
        int2 = PARAHEIGHT(string1, 300, 29 as fontmetrics);
    };
    IF_SETSIZE(300, (92 + (int2 * 20)), 0, 0, comp(512, 0));  // info_popup:bespoke_window
    if ((int0 != -1 as graphic)) {
        IF_SETGRAPHIC(int0, comp(512, 7));  // info_popup:graphic
    };
    if ((int1 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int1, 1, comp(512, 8));  // info_popup:obj
        if ((int0 == -1 as graphic)) {
            script13959(33554439, 11954, 0);
        };
    };
    IF_SETTEXT(string0, comp(512, 4));  // info_popup:title
    IF_SETTEXT(string1, comp(512, 5));  // info_popup:subtitle
    IF_SETTEXT(string2, comp(512, 11));  // info_popup:description
    IF_SETONTIMER(callback(script14709, CLIENTCLOCK()), comp(512, 2));  // info_popup:bespoke_window_content
    return;
}