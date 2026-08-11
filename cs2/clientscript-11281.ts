//
function script11281(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1422, 18));  // worldmap_v2_ui:overlay_window_cancel_layer
    IF_SETHIDE(false, comp(1612, 1));  // worldmap_v2_confirm:confirm_window
    var int2 = comp(1612, 3);  // worldmap_v2_confirm:confirm_window_content
    var int3 = comp(1612, 11);  // worldmap_v2_confirm:positive_button_active_layer
    IF_SETTEXT("Yes", comp(1612, 14));  // worldmap_v2_confirm:positive_button_text
    IF_SETTEXT("No", comp(1612, 22));  // worldmap_v2_confirm:neutral_button_text
    IF_SETONOP(callback(script10090), comp(1612, 19));  // worldmap_v2_confirm:neutral_button_active_layer
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_SETOP(callback(script1), int3);
    var int4 = 0;
    while ((int4 < int0)) {
        CC_CREATE(int3, 5, int4);
        int4 = (int4 + 1);
    };
    CC_CREATE(int3, 5, int0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETOP(1, "Select");
    CC_CREATE(int2, 4, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, (IF_GETHEIGHT(int2) - IF_GETY(IF_GETLAYER(int3))), 1, 1);
    if ((int0 <= 34)) {
        CC_SETTEXT(`Teleport to ${enum_getvalue(22, 36, 5726 as cs2enum, int1)}?`);
    } else {
        CC_SETTEXT("Teleport to J-Mod?");
    };
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}