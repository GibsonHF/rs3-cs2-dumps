//
function script7468(): void {
    if ((varclient_4741 == -1)) {
        varclient_4741 = 0;
    };
    script3288();
    script9828();
    varclient_2235 = comp(1387, 6);  // diango_items:text_input_listener
    varclient_2236 = 0;
    varclient_2250 = "";
    script7791(90898471, 90898470);
    var string0 = "Diango's Item Retrieval";
    if ((varplayer_9167 == 1)) {
        IF_SETSIZE(0, 0, 1, 1, comp(1387, 36));  // diango_items:holiday_container
        IF_SETHIDE(true, comp(1387, 15));  // diango_items:tabs_layer
        string0 = "Quest Storage Chest";
    } else {
        IF_SETSIZE(0, 40, 1, 1, comp(1387, 36));  // diango_items:holiday_container
        IF_SETHIDE(false, comp(1387, 15));  // diango_items:tabs_layer
    };
    if ((script6431() == 1)) {
        IF_SETPOSITION(4, 4, 0, 0, comp(1387, 4));  // diango_items:text_input_box
        IF_SETPOSITION(4, 4, 0, 2, comp(1387, 3));  // diango_items:holiday_area
    };
    script9554(90898433, 90898472, 90898434, string0, 21218);
    script14436();
    script595(1);
    script8841(94, 1);
    return;
}