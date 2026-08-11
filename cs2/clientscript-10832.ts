//
function script10832(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1567, 25));  // xmas2014:left_panel_rewards
        IF_SETHIDE(false, comp(1567, 11));  // xmas2014:left_panel_presents
        IF_SETHIDE(true, comp(1567, 43));  // xmas2014:right_panel_delivery
        IF_SETHIDE(false, comp(1567, 45));  // xmas2014:right_panel_default
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));  // xmas2014:right_panel_default_text
    } else {
        IF_SETHIDE(true, comp(1567, 11));  // xmas2014:left_panel_presents
        IF_SETHIDE(false, comp(1567, 25));  // xmas2014:left_panel_rewards
        IF_SETTEXT(`Christmas cheer: ${inttostring(varbitplayer_26357, 10)}`, comp(1567, 26));  // xmas2014:presents_delivered_text
        IF_SETHIDE(true, comp(1567, 43));  // xmas2014:right_panel_delivery
        IF_SETHIDE(false, comp(1567, 45));  // xmas2014:right_panel_default
        IF_SETTEXT("Check the left panel for the cosmetic rewards your Christmas cheer can unlock!", comp(1567, 46));  // xmas2014:right_panel_default_text
    };
    return;
}