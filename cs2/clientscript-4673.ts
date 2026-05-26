//
function script4673(int0: number): void {
    switch (int0) {
        case 2:
        case 3:
        case 6: {
            IF_SETHIDE(1, 6684707);
            IF_SETHIDE(0, 6684706);
            IF_SETONTIMER(callback(script4674), 6684706);
            break;
        }
        default: {
            IF_SETHIDE(1, 6684706);
            IF_SETHIDE(0, 6684707);
            IF_SETONTIMER(callback(script4674), 6684707);
            break;
        }
    };
    return;
}