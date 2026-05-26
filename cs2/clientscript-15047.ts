//
function script15047(): void {
    if (((strcmp(varclient_2250, "") == 0) && (strcmp(varclient_6788, "") == 0))) {
        IF_SETHIDE(false, comp(105, 345));
        script11704();
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), comp(105, 335));
        varclient_6788 = varclient_2250;
        IF_SETHIDE(false, comp(105, 337));
        IF_SETONCLICK(callback(script15048), comp(105, 337));
        script15054();
    };
    return;
}