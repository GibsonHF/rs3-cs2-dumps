//[proc,login_popup_close]
function script2954(int0: unknown_int): void {
    if ((IF_GETHIDE(comp(744, 169)) == false)) {
        script15687(varclient_1089);
        script15664(comp(744, 179), 48759126, comp(744, 341));
    };
    if ((IF_GETHIDE(comp(744, 336)) == false)) {
        IF_SETTEXT("", comp(744, 344));
        script15664(comp(744, 343), 48758962, comp(744, 177));
        IF_SETHIDE(true, comp(744, 344));
        IF_SETHIDE(true, comp(744, 336));
    };
    if ((int0 == 1)) {
        script4142(-1);
        script2940(varclient_1089);
    };
    return;
}