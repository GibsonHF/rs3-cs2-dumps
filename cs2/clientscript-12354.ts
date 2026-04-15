//
function script12354(): void {
    if ((varclient_5181 >= DATE_RUNEDAY())) {
        varclient_5181 = 0;
        IF_SETHIDE(true, comp(744, 254));
    } else {
        varclient_5181 = (DATE_RUNEDAY() + 90);
        IF_SETHIDE(false, comp(744, 254));
    };
    return;
}