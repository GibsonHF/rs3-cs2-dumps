//
function script15687(int0: number): void {
    IF_SETHIDE(true, comp(744, 147));
    IF_SETHIDE(true, comp(744, 83));
    IF_SETHIDE(true, comp(744, 93));
    IF_SETHIDE(true, comp(744, 173));
    IF_SETHIDE(true, comp(744, 62));
    IF_SETHIDE(true, comp(744, 172));
    switch (int0) {
        case 14: {
            IF_SETHIDE(false, comp(744, 147));
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(744, 83));
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(744, 62));
            break;
        }
        case 102: {
            IF_SETHIDE(false, comp(744, 173));
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(false, comp(744, 172));
            } else if ((script15214() == 1)) {
                IF_SETHIDE(false, comp(744, 62));
            } else {
                IF_SETHIDE(false, comp(744, 93));
            };
            break;
        }
    };
    return;
}