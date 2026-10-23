//
function script7879(): void {
    if ((IF_GETHIDE(comp(1420, 186)) == false)) {  // acc_create:game_mode
        IF_SETHIDE(true, comp(1420, 186));  // acc_create:game_mode
    } else if ((IF_GETHIDE(comp(1420, 147)) == false)) {  // acc_create:name_entry
        script15554();
    } else if ((IF_GETHIDE(comp(1420, 185)) == true)) {  // acc_create:newplayer_prompt
        if ((script6431() == 1)) {
            script1188();
        } else {
            IF_SETHIDE(false, comp(1420, 187));  // acc_create:escape_confirm
        };
    };
    return;
}