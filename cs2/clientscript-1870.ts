//
function script1870(int0: component): void {
    if ((REBOOTTIMER() > 0)) {
        IF_SETTEXT(`System update in: ${script17944()}`, int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    script15628();
    return;
}