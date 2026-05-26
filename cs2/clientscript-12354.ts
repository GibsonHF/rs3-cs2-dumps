//
function script12354(): void {
    if ((varclient_5181 >= DATE_RUNEDAY())) {
        varclient_5181 = 0;
        IF_SETHIDE(1, 48759039);
    } else {
        varclient_5181 = (DATE_RUNEDAY() + 90);
        IF_SETHIDE(0, 48759039);
    };
    return;
}