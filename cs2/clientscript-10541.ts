//
function script10541(): void {
    if ((IF_GETHIDE(comp(1775, 85)) == false)) {  // newplayer_prompt:escape_option
        IF_SETHIDE(true, comp(1775, 85));  // newplayer_prompt:escape_option
    } else {
        IF_SETHIDE(false, comp(1775, 85));  // newplayer_prompt:escape_option
    };
    return;
}