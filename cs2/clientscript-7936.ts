//
function script7936(int0: number): void {
    unk11046(10);
    varclient_3488 = int0;
    if ((varclient_3488 == 2)) {
        script7934(2);
    } else if ((varclient_3488 == 3)) {
        script7934(3);
    } else {
        script7934(4);
    };
    script7932();
    script15555();
    script15579();
    if ((script13749() == 0)) {
        IF_SETHIDE(true, comp(1420, 163));  // acc_create:settings_icon_layer
        IF_SETPOSITION(0, 150, 1, 0, comp(1420, 43));  // acc_create:base_inner
        IF_SETPOSITION(-80, 0, 2, 1, comp(1420, 44));  // acc_create:player_avatar
    } else {
        IF_SETPOSITION(-250, 0, 1, 1, comp(1420, 44));  // acc_create:player_avatar
        IF_SETPOSITION(0, 0, 2, 1, comp(1420, 62));  // acc_create:main_contents
    };
    IF_OPENSUBCLIENT(comp(1420, 183), 882);  // acc_create:graphics_options
    IF_SETHIDE(true, comp(1420, 183));  // acc_create:graphics_options
    script15063(1);
    script14987(0);
    return;
}