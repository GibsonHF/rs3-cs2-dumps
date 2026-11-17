//
function script19990(): void {
    var string0 = "Your Android device is running a 32-bit version of RuneScape. We will be dropping support for this architecture by the end of Q3 2025. By shifting our attention to 64-bit devices, we can unlock improved performance, increase efficiency and an overall smoother experience for players.";
    IF_SETTEXT(string0, comp(744, 256));  // loginscreen:dont_show_again_checkbox
    IF_SETTEXT("Okay", comp(744, 257));  // loginscreen:driver_warning_update
    varclient_8305 = script12477();
    return;
}