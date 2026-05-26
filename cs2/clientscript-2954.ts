//[proc,login_popup_close]
function script2954(int0: number): void {
    if ((IF_GETHIDE(48758953) == 0)) {
        script15687(varclient_1089);
        script15664(48758963, 48759126, 48759125);
    };
    if ((IF_GETHIDE(48759120) == 0)) {
        IF_SETTEXT("", 48759128);
        script15664(48759127, 48758962, 48758961);
        IF_SETHIDE(1, 48759128);
        IF_SETHIDE(1, 48759120);
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}