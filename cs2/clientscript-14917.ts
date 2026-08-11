//
function script14917(int0: number): void {
    if ((int0 == -1 as obj)) {
        return;
    };
    var int1 = script14686(int0);
    var int2 = script14960(int0);
    IF_SETHIDE(true, comp(694, 6));  // arch_restoration_inspect:popup_window
    IF_SETTEXT(OC_NAME(int0), comp(694, 47));  // arch_restoration_inspect:item_name_text
    IF_SETOBJECT_NONUM(int0, 1, comp(694, 46));  // arch_restoration_inspect:item_icon_graphic
    script14918(int1, int2);
    script14920(int1);
    if ((script6431() == 1)) {
        IF_SETSIZE(116, 18, 1, 1, comp(694, 8));  // arch_restoration_inspect:popup_window_content
    } else {
        IF_SETSIZE(108, 52, 1, 1, comp(694, 8));  // arch_restoration_inspect:popup_window_content
    };
    return;
}