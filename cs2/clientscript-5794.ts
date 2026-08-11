//
function script5794(): void {
    if ((STRING_LENGTH(varclient_2758) < 1)) {
        script426("You need to enter bug information before you can continue.", 92078089, -1, 0);
        return;
    };
    IF_SETHIDE(false, comp(1405, 7));  // bugreport_interface:prev_button
    IF_SETHIDE(true, comp(1405, 9));  // bugreport_interface:next_button
    IF_SETHIDE(false, comp(1405, 10));  // bugreport_interface:submit_button
    IF_SETHIDE(true, comp(1405, 4));  // bugreport_interface:input_step1
    IF_SETHIDE(false, comp(1405, 5));  // bugreport_interface:input_step2
    IF_SETHIDE(false, comp(1405, 7));  // bugreport_interface:prev_button
    IF_SETHIDE(true, comp(1405, 6));  // bugreport_interface:close_bugreporter
    return;
}