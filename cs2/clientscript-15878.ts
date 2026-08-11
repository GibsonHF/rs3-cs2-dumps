//
function script15878(): void {
    if ((IF_GETHIDE(comp(860, 4)) == false)) {  // tut_options:skip_confirm_layer
        IF_SETHIDE(true, comp(860, 4));  // tut_options:skip_confirm_layer
    } else {
        IF_SETHIDE(false, comp(860, 4));  // tut_options:skip_confirm_layer
    };
    return;
}