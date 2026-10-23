//
function script7926(): void {
    IF_SETONRESIZE(callback(), comp(882, 1));  // loginscreen_graphics_options:universe
    IF_CLOSESUBCLIENT(comp(882, 0));  // loginscreen_graphics_options:options_client_if
    IF_SETHIDE(true, comp(1420, 183));  // acc_create:graphics_options
    return;
}