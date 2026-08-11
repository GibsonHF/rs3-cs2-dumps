//
function script5127(): void {
    IF_SETHIDE(true, comp(1096, 604));  // clansettings:permissions_loading_blackout_layer
    IF_SETHIDE(false, comp(1096, 603));  // clansettings:category_text
    IF_SETTEXT("Loading, please wait.", comp(1096, 606));  // clansettings:rank_loading_text
    return;
}