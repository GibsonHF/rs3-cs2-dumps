//
function script7341(int0: number): void {
    IF_SETGRAPHIC(2291 as graphic, comp(188, 3));  // trh160_overlay:button_head_image
    IF_SETGRAPHIC(2291 as graphic, comp(188, 6));  // trh160_overlay:button_body_image
    IF_SETGRAPHIC(2291 as graphic, comp(188, 9));  // trh160_overlay:button_legs_image
    IF_SETGRAPHIC(2291 as graphic, comp(188, 12));  // trh160_overlay:button_feet_gloves_image
    IF_SETGRAPHIC(2291 as graphic, comp(188, 16));  // trh160_overlay:button_cloak_image
    IF_SETGRAPHIC(2291 as graphic, comp(188, 19));  // trh160_overlay:button_lamp_image
    IF_SETGRAPHIC(24451 as graphic, comp(188, 4));  // trh160_overlay:button_head_icon
    IF_SETGRAPHIC(24459 as graphic, comp(188, 7));  // trh160_overlay:button_body_icon
    IF_SETGRAPHIC(24463 as graphic, comp(188, 10));  // trh160_overlay:button_legs_icon
    IF_SETGRAPHIC(24467 as graphic, comp(188, 13));  // trh160_overlay:button_feet_gloves_icon_1
    IF_SETGRAPHIC(24465 as graphic, comp(188, 14));  // trh160_overlay:button_feet_gloves_icon_2
    IF_SETGRAPHIC(24453 as graphic, comp(188, 17));  // trh160_overlay:button_cloak_icon
    switch (int0) {
        case 1: {
            if ((varplayer_8676 != 1)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 3));  // trh160_overlay:button_head_image
                IF_SETGRAPHIC(24452 as graphic, comp(188, 4));  // trh160_overlay:button_head_icon
            };
            break;
        }
        case 2: {
            if ((varplayer_8676 != 2)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 6));  // trh160_overlay:button_body_image
                IF_SETGRAPHIC(24460 as graphic, comp(188, 7));  // trh160_overlay:button_body_icon
            };
            break;
        }
        case 3: {
            if ((varplayer_8676 != 3)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 9));  // trh160_overlay:button_legs_image
                IF_SETGRAPHIC(24464 as graphic, comp(188, 10));  // trh160_overlay:button_legs_icon
            };
            break;
        }
        case 4: {
            if ((varplayer_8676 != 4)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 12));  // trh160_overlay:button_feet_gloves_image
                IF_SETGRAPHIC(24468 as graphic, comp(188, 13));  // trh160_overlay:button_feet_gloves_icon_1
                IF_SETGRAPHIC(24466 as graphic, comp(188, 14));  // trh160_overlay:button_feet_gloves_icon_2
            };
            break;
        }
        case 5: {
            if ((varplayer_8676 != 5)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 16));  // trh160_overlay:button_cloak_image
                IF_SETGRAPHIC(24454 as graphic, comp(188, 17));  // trh160_overlay:button_cloak_icon
            };
            break;
        }
        case 6: {
            if ((varplayer_8676 != 6)) {
                IF_SETGRAPHIC(2290 as graphic, comp(188, 19));  // trh160_overlay:button_lamp_image
            };
            break;
        }
    };
    return;
}