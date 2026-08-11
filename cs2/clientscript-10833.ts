//
function script10833(): void {
    IF_SETHIDE(true, comp(1567, 43));  // xmas2014:right_panel_delivery
    IF_SETHIDE(false, comp(1567, 45));  // xmas2014:right_panel_default
    IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));  // xmas2014:right_panel_default_text
    return;
}