//
function script1868(int0: component): void {
    if ((REBOOTTIMER() > 0)) {
        IF_SETHIDE(false, comp(906, 56));
        script1870(comp(906, 58));
        IF_SETONTIMER(callback(script1869, 59375674), int0);
    };
    return;
}