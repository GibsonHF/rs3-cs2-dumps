//
function script12354(): void {
    if ((varclient_5181 >= DATE_RUNEDAY())) {
        varclient_5181 = 0;
        IF_SETHIDE(true, comp(744, 256));  // loginscreen:driver_warning_update
    } else {
        varclient_5181 = (DATE_RUNEDAY() + 90);
        IF_SETHIDE(false, comp(744, 256));  // loginscreen:driver_warning_update
    };
    return;
}