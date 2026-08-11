//
function script5346(): void {
    IF_SETTEXT(inttostring(varbitplayer_5545, 10), comp(1180, 84));  // rden2_overlay:score_text
    IF_SETTEXT(inttostring(varclient_1732, 10), comp(1180, 70));  // rden2_overlay:catalyst_text
    IF_SETTEXT(`${inttostring(varbitplayer_5557, 10)}%`, comp(1180, 56));  // rden2_overlay:charge_text
    if ((varclient_1731 != 1)) {
        IF_SETTEXT(`${inttostring(varclient_1731, 10)} sets`, comp(1180, 77));  // rden2_overlay:apparatus_text
    } else {
        IF_SETTEXT("1 set", comp(1180, 77));  // rden2_overlay:apparatus_text
    };
    switch (varclient_1731) {
        case 0: {
            IF_SETCOLOUR(12857645, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 1: {
            IF_SETCOLOUR(12857645, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 2: {
            IF_SETCOLOUR(13681696, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 3: {
            IF_SETCOLOUR(13681696, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 4: {
            IF_SETCOLOUR(13681696, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 5: {
            IF_SETCOLOUR(2672721, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
        case 6: {
            IF_SETCOLOUR(2672721, comp(1180, 77));  // rden2_overlay:apparatus_text
            break;
        }
    };
    if ((varclient_1732 < 3)) {
        IF_SETCOLOUR(12857645, comp(1180, 70));  // rden2_overlay:catalyst_text
    } else {
        IF_SETCOLOUR(2672721, comp(1180, 70));  // rden2_overlay:catalyst_text
    };
    switch (varclient_1730) {
        case 0: {
            IF_SETTEXT("None", comp(1180, 63));  // rden2_overlay:reagents_text
            IF_SETCOLOUR(12857645, comp(1180, 63));  // rden2_overlay:reagents_text
            break;
        }
        case 1: {
            IF_SETTEXT("A", comp(1180, 63));  // rden2_overlay:reagents_text
            IF_SETCOLOUR(13681696, comp(1180, 63));  // rden2_overlay:reagents_text
            break;
        }
        case 2: {
            IF_SETTEXT("B", comp(1180, 63));  // rden2_overlay:reagents_text
            IF_SETCOLOUR(13681696, comp(1180, 63));  // rden2_overlay:reagents_text
            break;
        }
        case 3: {
            IF_SETTEXT("A & B", comp(1180, 63));  // rden2_overlay:reagents_text
            IF_SETCOLOUR(2672721, comp(1180, 63));  // rden2_overlay:reagents_text
            break;
        }
    };
    IF_SETTEXT(`${inttostring(varbitplayer_5548, 10)} mins`, comp(1180, 49));  // rden2_overlay:timer_text
    if ((varbitplayer_5548 < 4)) {
        IF_SETCOLOUR(12857645, comp(1180, 49));  // rden2_overlay:timer_text
    } else {
        IF_SETCOLOUR(2672721, comp(1180, 49));  // rden2_overlay:timer_text
    };
    if ((varclient_1733 == 0)) {
        IF_SETGRAPHIC(3302 as graphic, comp(1180, 30));  // rden2_overlay:showevents_button
        IF_SETHIDE(false, comp(1180, 11));  // rden2_overlay:events_layer
    } else {
        IF_SETGRAPHIC(3303 as graphic, comp(1180, 30));  // rden2_overlay:showevents_button
        IF_SETHIDE(true, comp(1180, 11));  // rden2_overlay:events_layer
    };
    return;
}