//[proc,login_popup_close]
function script2954(int0: number): void {
    if ((IF_GETHIDE(comp(744, 169)) == false)) {
        script15687(varclient_1089);
        script15664(48758963, 48759126, 48759125);
    };
    if ((IF_GETHIDE(comp(744, 336)) == false)) {
        IF_SETTEXT("", comp(744, 344));
        script15664(48759127, 48758962, 48758961);
        IF_SETHIDE(true, comp(744, 344));
        IF_SETHIDE(true, comp(744, 336));
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}