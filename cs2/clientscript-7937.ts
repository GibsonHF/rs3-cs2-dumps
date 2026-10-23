//
function script7937(): void {
    IF_SETHIDE(false, comp(1420, 195));  // acc_create:fade_layer
    IF_SETONRESIZE(callback(script7931), comp(1420, 0));  // acc_create:base
    varclient_3687 = GENDER();
    varclient_2563 = "";
    varclient_2555 = "";
    varclient_2559 = "";
    varclient_1411 = 1;
    varclient_174 = -1;
    varclient_3491 = 0;
    varclient_3495 = (CLIENTCLOCK() + 600);
    varclient_3493 = 0;
    varclient_6880 = 0;
    script7932();
    script7849();
    IF_SETPLAYERMODEL_SELF(93061166);
    stack(93061167);
    unk11064();
    IF_SETMODELZOOM(950, comp(1420, 47));  // acc_create:avatar_head
    IF_SETMODELANGLE(0, 130, 0, 0, 0, 160, comp(1420, 46));  // acc_create:avatar_paperdoll
    IF_SETMODELANGLE(-70, 0, 0, 0, 0, 950, comp(1420, 47));  // acc_create:avatar_head
    script8154();
    IF_SETONKEY(callback(script7833, -2147483640, -2147483639), comp(1420, 9));  // acc_create:keyboard_listener
    if ((script13749() == 1)) {
        IF_SETHIDE(true, comp(1420, 16));  // acc_create:valley_bg
        IF_SETHIDE(false, comp(1420, 17));  // acc_create:village_bg
        IF_SETHIDE(true, comp(1420, 50));  // acc_create:play_now_button_pc
        IF_SETHIDE(false, comp(1420, 51));  // acc_create:play_now_button
    } else {
        IF_SETHIDE(false, comp(1420, 50));  // acc_create:play_now_button_pc
        IF_SETHIDE(true, comp(1420, 51));  // acc_create:play_now_button
    };
    IF_SETDRAGGABLE(comp(1420, 0) /*acc_create:base*/, -1, comp(1420, 48) /*acc_create:rotate_layer*/);
    varclient_3484 = 0;
    if ((MAP_LANG() != 0)) {
        IF_SETHIDE(true, comp(786, 5));  // acc_create_name:suggestions
    };
    IF_SETONTIMER(callback(script7938, (CLIENTCLOCK() + 25)), comp(1420, 8));  // acc_create:fade_listener
    return;
}