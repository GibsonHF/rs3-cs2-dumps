//
function script18455(int0: number): void {
    IF_SETHIDE(false, comp(1280, 71));  // buff_select_event:reward_popup_firework_layer
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(true, comp(1280, 71));  // buff_select_event:reward_popup_firework_layer
        IF_SETONTIMER(callback(), comp(1280, 24));  // buff_select_event:reward_popup_layer
    };
    return;
}