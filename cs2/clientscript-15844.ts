//
function script15844(int0: number): void {
    if ((script6431() == 1)) {
        IF_SETHIDE(false, comp(137, 1));  // chatdefault:mobile_listener
        IF_SETPOSITION(0, 0, 0, 0, comp(137, 67));  // chatdefault:player_input_wrapper
        IF_SETSIZE(0, 40, 1, 0, comp(137, 67));  // chatdefault:player_input_wrapper
        IF_SETPOSITION(0, 40, 0, 0, comp(137, 84));  // chatdefault:chat_render_layer
        IF_SETSIZE(0, 40, 1, 1, comp(137, 84));  // chatdefault:chat_render_layer
        IF_SETPOSITION(0, 0, 0, 2, comp(137, 69));  // chatdefault:divider_graphic
        IF_SETHIDE(false, comp(137, 68));  // chatdefault:mobile_player_input_background
        IF_SETHIDE(false, comp(137, 85));  // chatdefault:mobile_render_background
        IF_SETHIDE(true, comp(137, 74));  // chatdefault:player_name
        IF_SETONOP(callback(script8513, 18), comp(137, 67));  // chatdefault:player_input_wrapper
        IF_SETOP(1, "Enter Message", comp(137, 67));  // chatdefault:player_input_wrapper
        IF_CLEAROPS(comp(137, 82));  // chatdefault:input
        IF_SETONOP(callback(), comp(137, 82));  // chatdefault:input
        IF_SETNOCLICKTHROUGH(0, comp(137, 76));  // chatdefault:inputarea
        IF_SETNOCLICKTHROUGH(1, comp(137, 67));  // chatdefault:player_input_wrapper
        script15881();
        IF_SETONTIMER(callback(script2704), comp(137, 1));  // chatdefault:mobile_listener
        IF_SETTRANS(255, comp(137, 2));  // chatdefault:mobile_listener_graphic
        IF_SETPARAM_INT(6839, varclient_2835, comp(137, 55));  // chatdefault:chat
        if ((int0 == 1)) {
            script9292();
        };
    } else {
        IF_SETHIDE(true, comp(137, 1));  // chatdefault:mobile_listener
        IF_SETHIDE(true, comp(137, 68));  // chatdefault:mobile_player_input_background
        IF_SETHIDE(true, comp(137, 85));  // chatdefault:mobile_render_background
        IF_SETHIDE(true, comp(137, 70));  // chatdefault:mobile_channel_name
        IF_SETONTIMER(callback(), comp(137, 1));  // chatdefault:mobile_listener
    };
    return;
}