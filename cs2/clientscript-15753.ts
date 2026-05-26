//
function script15753(): void {
    if ((script6431() == 1)) {
        SHOP_REQUESTDATA();
        IF_SETONTIMER(callback(script1219), 55050242);
        IF_SETHIDE(1, 55050261);
        IF_SETHIDE(1, 55050259);
    } else {
        IF_SETTEXT("Try For Free", 55050266);
        IF_SETTEXT("Then monthly recurring billing. Cancel any time.", 55050259);
    };
    IF_SETHIDE(1, 55050247);
    script8841(95, 1);
    var int0 = 55050318;
    var int1 = (STRINGWIDTH(IF_GETTEXT(int0), IF_GETFONTMETRICS(int0)) + 10);
    IF_SETSIZE(int1, IF_GETHEIGHT(int0), 0, 0, int0);
    IF_SETSIZE((IF_GETX(int0) + IF_GETWIDTH(int0)), IF_GETHEIGHT(55050316), 0, 0, 55050316);
    IF_SETPOSITION(IF_GETWIDTH(55050316), IF_GETY(55050317), 0, 0, 55050317);
    return;
}