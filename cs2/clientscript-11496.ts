//
function script11496(int0: number): void {
    var int1 = comp(-1, 65535);
    if ((int0 == 1)) {
        CC_DELETEALL(comp(1588, 24));  // telemetry:skill_draw_layer
        CC_DELETEALL(comp(1588, 27));  // telemetry:skill_row_click_layer
        CC_DELETEALL(comp(1588, 25));  // telemetry:skill_column_click_layer
        CC_DELETEALL(comp(1588, 28));  // telemetry:skill_drag_layer
        CC_DELETEALL(comp(1588, 18));  // telemetry:combat_draw_layer
        CC_DELETEALL(comp(1588, 21));  // telemetry:combat_row_click_layer
        CC_DELETEALL(comp(1588, 19));  // telemetry:combat_column_click_layer
        CC_DELETEALL(comp(1588, 22));  // telemetry:combat_drag_layer
        CC_DELETEALL(comp(1588, 12));  // telemetry:wealth_draw_layer
        CC_DELETEALL(comp(1588, 15));  // telemetry:wealth_row_click_layer
        CC_DELETEALL(comp(1588, 13));  // telemetry:wealth_column_click_layer
        CC_DELETEALL(comp(1588, 16));  // telemetry:wealth_drag_layer
        script11894(104071197);
        script11894(104071191);
        script11894(104071185);
        int1 = comp(1588, 3);  // telemetry:scrollwheel_layer
    } else if ((int0 == 2)) {
        CC_DELETEALL(comp(1681, 27));  // toplevel_v2_parent_suboverlay_telemetry:skill_draw_layer
        CC_DELETEALL(comp(1681, 30));  // toplevel_v2_parent_suboverlay_telemetry:skill_row_click_layer
        CC_DELETEALL(comp(1681, 28));  // toplevel_v2_parent_suboverlay_telemetry:skill_column_click_layer
        CC_DELETEALL(comp(1681, 31));  // toplevel_v2_parent_suboverlay_telemetry:skill_drag_layer
        CC_DELETEALL(comp(1681, 21));  // toplevel_v2_parent_suboverlay_telemetry:combat_draw_layer
        CC_DELETEALL(comp(1681, 24));  // toplevel_v2_parent_suboverlay_telemetry:combat_row_click_layer
        CC_DELETEALL(comp(1681, 22));  // toplevel_v2_parent_suboverlay_telemetry:combat_column_click_layer
        CC_DELETEALL(comp(1681, 25));  // toplevel_v2_parent_suboverlay_telemetry:combat_drag_layer
        CC_DELETEALL(comp(1681, 15));  // toplevel_v2_parent_suboverlay_telemetry:wealth_draw_layer
        CC_DELETEALL(comp(1681, 18));  // toplevel_v2_parent_suboverlay_telemetry:wealth_row_click_layer
        CC_DELETEALL(comp(1681, 16));  // toplevel_v2_parent_suboverlay_telemetry:wealth_column_click_layer
        CC_DELETEALL(comp(1681, 19));  // toplevel_v2_parent_suboverlay_telemetry:wealth_drag_layer
        script11894(110166048);
        script11894(110166042);
        script11894(110166036);
        int1 = comp(1681, 6);  // toplevel_v2_parent_suboverlay_telemetry:scrollwheel_layer
    };
    IF_SETONSCROLLWHEEL(callback(), int1);
    return;
}