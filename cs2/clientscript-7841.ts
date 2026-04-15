//
function script7841(): void {
    switch (varclient_4194) {
        case 5: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Google", comp(744, 80));
            IF_SETHIDE(false, comp(744, 72));
            break;
        }
        case 6: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Apple", comp(744, 80));
            IF_SETHIDE(false, comp(744, 72));
            break;
        }
        default: {
            IF_SETHIDE(false, comp(744, 63));
            return;
        }
    };
    script7852(comp(744, 81), 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061 as dbrow, "Link Account");
    CC_SETONBUTTONCLICK(callback(script7842, 2));
    return;
}