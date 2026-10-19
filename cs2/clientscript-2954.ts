//[proc,login_popup_close]
function script2954(int0: number): void {
    if ((IF_GETHIDE(comp(744, 169)) == false)) {  // loginscreen:login_progress_popup
        script15687(varclient_1089);
        script15664(48758963, 48759127, 48759126);
    };
    if ((IF_GETHIDE(comp(744, 337)) == false)) {  // loginscreen:com_337
        IF_SETTEXT("", comp(744, 345));  // loginscreen:popup_border
        script15664(48759128, 48758962, 48758961);
        IF_SETHIDE(true, comp(744, 345));  // loginscreen:popup_border
        IF_SETHIDE(true, comp(744, 337));  // loginscreen:com_337
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}