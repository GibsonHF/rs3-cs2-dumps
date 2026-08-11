//[proc,login_popup_close]
function script2954(int0: number): void {
    if ((IF_GETHIDE(comp(744, 173)) == false)) {  // loginscreen:login_progress_popup_password
        script15687(varclient_1089);
        script15664(48758967, 48759137, 48759136);
    };
    if ((IF_GETHIDE(comp(744, 347)) == false)) {  // loginscreen:language_dropdown
        IF_SETTEXT("", comp(744, 355));  // loginscreen:dropdown_list
        script15664(48759138, 48758966, 48758965);
        IF_SETHIDE(true, comp(744, 355));  // loginscreen:dropdown_list
        IF_SETHIDE(true, comp(744, 347));  // loginscreen:language_dropdown
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}