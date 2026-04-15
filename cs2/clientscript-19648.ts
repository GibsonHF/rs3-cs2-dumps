//
function script19648(int0: unknown_int): void {
    if ((((int0 == 0) && (varbitplayer_56777 == 0)) || ((int0 == 1) && (varbitplayer_56778 == 0)))) {
        IF_SETTEXT("Open 15 doors on their respective days to get this reward.", comp(641, 145));
    } else {
        IF_SETTEXT("<col=FF00>You have claimed this reward!</col>", comp(641, 145));
    };
    return;
}