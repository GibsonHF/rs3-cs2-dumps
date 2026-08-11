//
function script12336(int0: number): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1735, 2));  // toplevel_v2_parent_suboverlay_droplog_settings:dropdown_build_layer
    CC_DELETEALL(comp(1735, 3));  // toplevel_v2_parent_suboverlay_droplog_settings:dropdown_click_layer
    var int1 = IF_GETLAYER(comp(1735, 2));  // toplevel_v2_parent_suboverlay_droplog_settings:dropdown_build_layer
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int1);
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int5, int6, int5] = script12343(33124, script12293(1735));
    stack(int0);
    stack(4);
    stack(int3);
    int3 = (int3 + 1);
    CC_CREATE();
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXT("Settings");
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), 1000, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETCOLOUR(script10495(0));
    int2 = (int2 + (CC_GETHEIGHT() + 8));
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT("Drop log mode:");
    CC_SETSIZE(200, 20, 0, 0);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int2 = (int2 + (CC_GETHEIGHT() + 0));
    [int2, int3] = script10429(113704962, 113704963, 0, int2, int6, IF_GETNEXTSUBID(comp(1735, 2)), 10375, -1, "Select the mode for the drop log.", varbitplayer_29537, 0);  // toplevel_v2_parent_suboverlay_droplog_settings:dropdown_build_layer
    return;
}