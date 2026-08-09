//
function script19648(int0: number): void {
    if ((int0 == 0)) {
        if ((varbitplayer_56777 == 0)) {
            IF_SETTEXT("Open 15 doors on their respective days to get this reward.", comp(641, 145));
        } else if ((int0 == 1)) {
            if ((varbitplayer_56778 == 0)) {
                IF_SETTEXT("Open 15 doors on their respective days to get this reward.", comp(641, 145));
            } else {
                IF_SETTEXT("<col=FF00>You have claimed this reward!</col>", comp(641, 145));
            };
        } else {
            IF_SETTEXT("<col=FF00>You have claimed this reward!</col>", comp(641, 145));
        };
    } else if ((int0 == 1)) {
        if ((varbitplayer_56778 == 0)) {
            IF_SETTEXT("Open 15 doors on their respective days to get this reward.", comp(641, 145));
        } else {
            IF_SETTEXT("<col=FF00>You have claimed this reward!</col>", comp(641, 145));
        };
    } else {
        IF_SETTEXT("<col=FF00>You have claimed this reward!</col>", comp(641, 145));
    };
    return;
}