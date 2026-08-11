//
function script7518(int0: number, int1: number): void {
    IF_SETTEXT(script7520(varclient_2709), int0);
    if ((varbitplayer_17941 == 0)) {
        switch (varclient_2709) {
            case 10: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Ready yourself in the start room by grabbing any equipment and food you need.");
                break;
            }
            case 25: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
            case 80: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Keep track of your objectives in the top-left. Deposit the most items to achieve rank 1!");
                break;
            }
            case 95: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
            case 130: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Collect cards to use in the treasure room. Each card has a different power, click one to examine your deck.");
                break;
            }
            case 145: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
            case 210: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Come first to start the treasure room with the huge lamp and earn a bonus card!");
                break;
            }
            case 225: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
            case 310: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Make sure you deposit items before the objective is complete, otherwise the items won't add to your score.");
                break;
            }
            case 325: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
            case 610: {
                IF_SETHIDE(true, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                script7521("Only 1 minute left! Make sure you deposit any items before time runs out!");
                break;
            }
            case 625: {
                IF_SETHIDE(false, comp(1213, 0));  // xp_popup:xp_popup_containing_layer
                IF_SETHIDE(true, comp(1391, 4));  // rand_dnd_overlay:newplayer_tip
                break;
            }
        };
    };
    if ((varclient_2709 > 0)) {
        IF_SETONTIMER(callback(script7519, int0, (CLIENTCLOCK() + int1)), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}