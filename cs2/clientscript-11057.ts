//
function script11057(): void {
    if ((struct_getparam(varplayer_5144, 3042) == false)) {
        IF_SETTEXT("Standard", comp(1591, 91));
        return;
    };
    switch (varbitplayer_27140) {
        case 0: {
            IF_SETTEXT("Standard", comp(1591, 91));
            break;
        }
        case 1: {
            IF_SETTEXT("Fast", comp(1591, 91));
            break;
        }
        case 2: {
            IF_SETTEXT("Fastest", comp(1591, 91));
            break;
        }
    };
    return;
}