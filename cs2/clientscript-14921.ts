//
function script14921(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    CC_DELETEALL(comp(694, 15));  // arch_restoration_inspect:collection_popup_header_background_layer
    CC_DELETEALL(comp(694, 16));  // arch_restoration_inspect:collection_popup_header_build_layer
    CC_DELETEALL(comp(694, 49));  // arch_restoration_inspect:collection_popup_contents_background_layer
    CC_DELETEALL(comp(694, 50));  // arch_restoration_inspect:collection_popup_contents_build_layer
    CC_DELETEALL(comp(694, 52));  // arch_restoration_inspect:collection_popup_footer_background_layer
    CC_DELETEALL(comp(694, 53));  // arch_restoration_inspect:collection_popup_footer_build_layer
    var int1 = -1;
    var int2 = -1;
    stack(340080);
    stack(int0);
    DB_FIND(0);
    int1 = dbrow_findnext();
    if ((int1 != -1)) {
        stack(335984);
        stack(int1);
        DB_FIND(0);
        int2 = dbrow_findnext();
    };
    if ((int2 != -1)) {
        IF_SETTEXT(`${dbrow_getfield(int2, 335888, 0)}<br>Location: ${dbrow_getfield(int2, 335952, 0)}`, comp(694, 11));  // arch_restoration_inspect:popup_title
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    int3 = script14766(45481999, 45482000, int0, 0, 0, IF_GETWIDTH(comp(694, 14)), 0, 0);  // arch_restoration_inspect:collection_popup_header_layer
    if ((IF_FIND(comp(694, 14)) == 1)) {  // arch_restoration_inspect:collection_popup_header_layer
        CC_SETSIZE(0, int3, 1, 0);
    };
    int4 = script14768(45482036, 45482037, -1, int0, 0, 0, IF_GETWIDTH(comp(694, 18)), 0, "");  // arch_restoration_inspect:collection_popup_footer_layer
    if ((IF_FIND(comp(694, 18)) == 1)) {  // arch_restoration_inspect:collection_popup_footer_layer
        CC_SETSIZE(0, int4, 1, 0);
    };
    if ((IF_FIND(comp(694, 17)) == 1)) {  // arch_restoration_inspect:collection_popup_contents_layer
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETSIZE(0, (int3 + int4), 1, 1);
    };
    int5 = script14767(45482033, 45482034, -1, int0, 0, 0, IF_GETWIDTH(comp(694, 17)), IF_GETHEIGHT(comp(694, 17)), (IF_GETWIDTH(comp(694, 17)) - 19), 0);  // arch_restoration_inspect:collection_popup_contents_layer
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(694, 50)), int5), comp(694, 50));  // arch_restoration_inspect:collection_popup_contents_build_layer
    IF_SETSCROLLPOS(0, 0, comp(694, 50));  // arch_restoration_inspect:collection_popup_contents_build_layer
    script7791(45482035, 45482034);
    IF_SETHIDE(false, comp(694, 6));  // arch_restoration_inspect:popup_window
    return;
}