//
function script18170(int0: number): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((script3392() == 1)) {
        string0 = "Daily rewards";
        if ((script15206() == 0)) {
            string1 = "Toggle active effect";
        };
        string2 = "Open DXP Store";
    };
    IF_SETOP(2, string0, comp(745, 7));  // statusicons:xpx2smallbuttonlayer
    IF_SETOP(3, string1, comp(745, 7));  // statusicons:xpx2smallbuttonlayer
    IF_SETOP(4, string2, comp(745, 7));  // statusicons:xpx2smallbuttonlayer
    IF_SETOP(5, string0, comp(1920, 7));  // toplevel_v2_minimap_legacy:xpx2smallbutton
    IF_SETOP(6, string1, comp(1920, 7));  // toplevel_v2_minimap_legacy:xpx2smallbutton
    IF_SETOP(7, string2, comp(1920, 7));  // toplevel_v2_minimap_legacy:xpx2smallbutton
    if ((int0 == 2)) {
        IF_SETOP(2, string0, comp(279, 17));  // mobile_ribbon_left:event_wrapper
        IF_SETOP(3, string1, comp(279, 17));  // mobile_ribbon_left:event_wrapper
        IF_SETOP(4, string2, comp(279, 17));  // mobile_ribbon_left:event_wrapper
    };
    return;
}