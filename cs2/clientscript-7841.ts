//
function script7841(): void {
    switch (varclient_4194) {
        case 5: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Google", 48758864);
            IF_SETHIDE(0, 48758856);
            break;
        }
        case 6: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Apple", 48758864);
            IF_SETHIDE(0, 48758856);
            break;
        }
        default: {
            IF_SETHIDE(0, 48758847);
            return;
        }
    };
    script7852(48758865, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061, "Link Account");
    CC_SETONBUTTONCLICK(callback(script7842, 2));
    return;
}