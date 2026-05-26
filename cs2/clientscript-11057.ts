//
function script11057(): void {
    if ((struct_getparam(varplayer_5144, 3042) == false)) {
        IF_SETTEXT("Standard", 104267871);
        return;
    };
    switch (varbitplayer_27140) {
        case 0: {
            IF_SETTEXT("Standard", 104267871);
            break;
        }
        case 1: {
            IF_SETTEXT("Fast", 104267871);
            break;
        }
        case 2: {
            IF_SETTEXT("Fastest", 104267871);
            break;
        }
    };
    return;
}