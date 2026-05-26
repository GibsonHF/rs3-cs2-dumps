//
function script1868(int0: number): void {
    if ((REBOOTTIMER() > 0)) {
        IF_SETHIDE(0, 59375672);
        script1870(59375674);
        IF_SETONTIMER(callback(script1869, 59375674), int0);
    };
    return;
}