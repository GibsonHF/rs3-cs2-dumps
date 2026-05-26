//
function script2095(): void {
    if ((varclient_654 < 100)) {
        varclient_654 = (varclient_654 + 1);
    };
    if ((varclient_654 == 50)) {
        IF_SETHIDE(1, 54657053);
        IF_SETHIDE(1, 54657072);
        IF_SETHIDE(1, 54657076);
    };
    if ((varclient_654 == 100)) {
        IF_SETHIDE(0, 54657053);
        IF_SETHIDE(0, 54657072);
        IF_SETHIDE(0, 54657076);
        varclient_654 = 0;
    };
    return;
}