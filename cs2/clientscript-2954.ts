//[proc,login_popup_close]
function script2954(int0: number): void {
    if ((IF_GETHIDE(comp(744, 173)) == false)) {  // loginscreen:login_progress_popup_password
        script15687(varclient_1089);
        script15664(48758967, 48759139, 48759138);
    };
    if ((IF_GETHIDE(comp(744, 349)) == false)) {  // loginscreen:options_firstrun
        IF_SETTEXT("", comp(744, 357));  // loginscreen:dropdown_build
        script15664(48759140, 48758966, 48758965);
        IF_SETHIDE(true, comp(744, 357));  // loginscreen:dropdown_build
        IF_SETHIDE(true, comp(744, 349));  // loginscreen:options_firstrun
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}