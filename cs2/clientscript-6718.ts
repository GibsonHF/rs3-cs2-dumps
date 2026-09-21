//
function script6718(): void {
    var int0 = comp(744, 135);  // loginscreen:login_button
    IF_SETONTIMER(callback(), comp(744, 336));  // loginscreen:popup
    IF_SETONCLICK(callback(script2944), int0);
    IF_SETONTIMER(callback(), int0);
    LOGIN_RESETREPLY();
    script2954(1);
    return;
}