//
function script15687(int0: number): void {
    IF_SETHIDE(1, 48758927);
    IF_SETHIDE(1, 48758867);
    IF_SETHIDE(1, 48758873);
    IF_SETHIDE(1, 48758953);
    IF_SETHIDE(1, 48758846);
    IF_SETHIDE(1, 48758952);
    switch (int0) {
        case 14: {
            IF_SETHIDE(0, 48758927);
            break;
        }
        case 13: {
            IF_SETHIDE(0, 48758867);
            break;
        }
        case 16: {
            IF_SETHIDE(0, 48758846);
            break;
        }
        case 102: {
            IF_SETHIDE(0, 48758953);
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(0, 48758952);
            } else if ((script15214() == 1)) {
                IF_SETHIDE(0, 48758846);
            } else {
                IF_SETHIDE(0, 48758873);
            };
            break;
        }
    };
    return;
}