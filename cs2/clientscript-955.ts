//
function script955(): void {
    if ((varbitplayer_5748 == 3)) {
        if ((INV_TOTALCAT(94 as inv, 926) == 0)) {
            if ((INV_TOTALCAT(93 as inv, 926) == 0)) {
                IF_SETHIDE(false, comp(730, 7));  // hvh_game:pickup_stone
            } else {
                IF_SETHIDE(true, comp(730, 7));  // hvh_game:pickup_stone
            };
        } else {
            IF_SETHIDE(true, comp(730, 7));  // hvh_game:pickup_stone
        };
    };
    return;
}