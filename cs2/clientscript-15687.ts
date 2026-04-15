//
function script15687(int0: int): void {
    IF_SETHIDE(true, comp(744, 142));
    IF_SETHIDE(true, comp(744, 83));
    IF_SETHIDE(true, comp(744, 88));
    IF_SETHIDE(true, comp(744, 168));
    IF_SETHIDE(true, comp(744, 62));
    IF_SETHIDE(true, comp(744, 167));
    switch (int0) {
        case 14: {
            IF_SETHIDE(false, comp(744, 142));
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
            IF_SETHIDE(false, comp(744, 168));
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(false, comp(744, 167));
            } else if ((script15214() == 1)) {
                IF_SETHIDE(false, comp(744, 62));
            } else {
                IF_SETHIDE(false, comp(744, 88));
            };
            break;
        }
    };
    return;
}