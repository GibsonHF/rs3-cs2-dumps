//
function script12084(int0: number, int1: number, string0: string): void {
    if ((IF_GETHIDE(comp(1477, 636)) == false)) {  // toplevel_v2:xp_popup_text_window
        CC_CREATE(comp(1477, 637), 4, IF_GETNEXTSUBID(comp(1477, 637)));  // toplevel_v2:xp_popup_text_window_content
        CC_SETTRANS(255);
        CC_SETSIZE(200, 25, 0, 0);
        CC_SETTEXTFONT(212 as fontmetrics);
        CC_SETCOLOUR(int0);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(string0);
        CC_SETPOSITION(0, 0, 1, 2);
        CC_SETONTIMER(callback(script12085, -2147483645, CC_GETID(), (CLIENTCLOCK() + int1)));
    } else {
        CC_DELETEALL(comp(1477, 637));  // toplevel_v2:xp_popup_text_window_content
    };
    return;
}