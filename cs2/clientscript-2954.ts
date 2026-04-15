//[proc,login_popup_close]
function script2954(int0: unknown_int): void {
    if ((IF_GETHIDE(comp(744, 168)) == false)) {
        script15687(varclient_1089);
        script15664(comp(744, 178), 48759125, comp(744, 340));
    };
    if ((IF_GETHIDE(comp(744, 335)) == false)) {
        IF_SETTEXT("", comp(744, 343));
        script15664(comp(744, 342), 48758961, comp(744, 176));
        IF_SETHIDE(true, comp(744, 343));
        IF_SETHIDE(true, comp(744, 335));
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}