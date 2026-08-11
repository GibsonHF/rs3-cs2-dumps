//
function script6548(): void {
    script9554(11010049, 11010086, 11010050, dbrow_getfield(varplayer_8551, 192512, 0), 21218);
    if ((script6545(varplayer_8551) == 1)) {
        IF_SETHIDE(false, comp(168, 22));  // reward_chest:bank_all_button_layer
    };
    var string0 = "";
    switch (varplayer_8551) {
        case 2629: {
            IF_SETTEXT("Deposit all", comp(168, 30));  // reward_chest:bank_all_button_text
            string0 = "Deposit all materials into your material storage.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), comp(168, 22));  // reward_chest:bank_all_button_layer
            break;
        }
    };
    var int0 = 0;
    if ((script6546(varplayer_8551) == 1)) {
        switch (varplayer_8551) {
            case 1668: {
                if ((varbitplayer_23063 == 1)) {
                    return;
                };
                IF_SETTEXT("Pet Chance", comp(168, 47));  // reward_chest:reroll_button_text
                break;
            }
            case 1578: {
                if ((varbitplayer_28712 != 1)) {
                    return;
                };
                break;
            }
            case 6362: {
                if ((varbitplayer_51510 != 1)) {
                    return;
                };
                break;
            }
            case 1669: {
                string0 = `Number of rolls left: ${inttostring(varbitplayer_17792, 10)}`;
                IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), comp(168, 31));  // reward_chest:reroll_button_layer
                break;
            }
        };
        int0 = 1;
        IF_SETHIDE(false, comp(168, 31));  // reward_chest:reroll_button_layer
    };
    if ((script6547(varplayer_8551) == 1)) {
        switch (varplayer_8551) {
            case 1669: {
                string0 = "Using this button will convert all Dominion Tower items into more Factor points that will be added to the XP book reward.";
                IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), comp(168, 32));  // reward_chest:convert_button_layer
                break;
            }
        };
        int0 = 1;
        IF_SETHIDE(false, comp(168, 32));  // reward_chest:convert_button_layer
    };
    if ((int0 == 1)) {
        IF_SETSIZE(IF_GETWIDTH(comp(168, 0)), 0, 0, 1, comp(168, 0));  // reward_chest:mainmodal_window
    };
    return;
}