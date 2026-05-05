//
function script15687(int0: int): void {
    IF_SETHIDE(true, comp(744, 143));
    IF_SETHIDE(true, comp(744, 83));
    IF_SETHIDE(true, comp(744, 89));
    IF_SETHIDE(true, comp(744, 169));
    IF_SETHIDE(true, comp(744, 62));
    IF_SETHIDE(true, comp(744, 168));
    switch (int0) {
        case 14: {
            IF_SETHIDE(false, comp(744, 143));
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
            IF_SETHIDE(false, comp(744, 169));
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(false, comp(744, 168));
            } else if ((script15214() == 1)) {
                IF_SETHIDE(false, comp(744, 62));
            } else {
                IF_SETHIDE(false, comp(744, 89));
            };
            break;
        }
    };
    return;
}