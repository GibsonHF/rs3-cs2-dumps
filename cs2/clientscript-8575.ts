//
function script8575(int0: number): void {
    if ((varbitplayer_36829 == 0)) {
        IF_SETHIDE(true, comp(1890, 40));  // prayer_quick_preset_interface:scrollbar_layer
    } else {
        IF_SETHIDE(false, comp(1890, 40));  // prayer_quick_preset_interface:scrollbar_layer
    };
    CC_DELETEALL(comp(1890, 4));  // prayer_quick_preset_interface:preset_button_layer
    CC_DELETEALL(comp(1890, 5));  // prayer_quick_preset_interface:preset_name_layer
    CC_DELETEALL(comp(1890, 6));  // prayer_quick_preset_interface:preset_rubbish_btn_layer
    CC_DELETEALL(comp(1890, 10));  // prayer_quick_preset_interface:preset_ability_layer
    CC_DELETEALL(comp(1890, 7));  // prayer_quick_preset_interface:preset_edit_btn_layer
    var int1 = 0;
    var int2 = 0;
    while ((int1 == 0)) {
        if ((script2222(int2) == 0)) {
            script8573(int2);
            int1 = 1;
        } else {
            script8572(int2);
            script8574(int2);
        };
        int2 = (int2 + 1);
        if ((int2 > 9)) {
            int1 = 1;
            return;
        };
    };
    return;
}