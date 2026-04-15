//
function script15753(): void {
    if ((script6431() == true)) {
        SHOP_REQUESTDATA();
        IF_SETONTIMER(callback(script1219), 55050242);
        IF_SETHIDE(1, 55050261);
        IF_SETHIDE(1, 55050259);
    } else {
        IF_SETTEXT("Try For Free", comp(840, 26));
        IF_SETTEXT("Then monthly recurring billing. Cancel any time.", comp(840, 19));
    };
    IF_SETHIDE(true, comp(840, 7));
    script8841(95, 1);
    var int0 = comp(840, 78);
    var int1 = (STRINGWIDTH(IF_GETTEXT(int0), IF_GETFONTMETRICS(int0)) + 10);
    IF_SETSIZE(int1, IF_GETHEIGHT(int0), 0, 0, int0);
    IF_SETSIZE((IF_GETX(int0) + IF_GETWIDTH(int0)), IF_GETHEIGHT(comp(840, 76)), 0, 0, comp(840, 76));
    IF_SETPOSITION(IF_GETWIDTH(comp(840, 76)), IF_GETY(comp(840, 77)), 0, 0, comp(840, 77));
    return;
}