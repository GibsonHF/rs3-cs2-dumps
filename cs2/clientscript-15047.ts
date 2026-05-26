//
function script15047(): void {
    if (((strcmp(varclient_2250, "") == 0) && (strcmp(varclient_6788, "") == 0))) {
        IF_SETHIDE(0, 6881625);
        script11704();
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), 6881615);
        varclient_6788 = varclient_2250;
        IF_SETHIDE(0, 6881617);
        IF_SETONCLICK(callback(script15048), 6881617);
        script15054();
    };
    return;
}