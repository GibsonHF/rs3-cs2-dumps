//
function script17327(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var string0 = "";
    var int2 = -1 as graphic;
    [int0, int1, string0] = script17297();
    IF_SETHIDE(false, comp(1152, 70));  // trh192_overlay:reward_claim_prize_graphic
    IF_SETHIDE(true, comp(1152, 69));  // trh192_overlay:reward_claim_prize_model
    if ((int0 != -1 as obj)) {
        if ((int1 > 1)) {
            IF_SETTEXT(`${inttostring(int1, 10)} x ${OC_NAME(int0)}`, comp(1152, 71));  // trh192_overlay:reward_claim_prize_title_text
        } else {
            IF_SETTEXT(OC_NAME(int0), comp(1152, 71));  // trh192_overlay:reward_claim_prize_title_text
        };
        switch (int0) {
            case 28906: {
                int2 = 11640 as graphic;
                break;
            }
            case 29923: {
                int2 = 11641 as graphic;
                break;
            }
            case 54776: {
                IF_SETHIDE(false, comp(1152, 69));  // trh192_overlay:reward_claim_prize_model
                IF_SETHIDE(true, comp(1152, 70));  // trh192_overlay:reward_claim_prize_graphic
                break;
            }
        };
        if ((int2 != -1 as graphic)) {
            IF_SETGRAPHIC(int2, comp(1152, 70));  // trh192_overlay:reward_claim_prize_graphic
        } else if ((int1 == 1)) {
            IF_SETOBJECT_HIGHRES(int0, 75497542);
        } else {
            IF_SETOBJECT(int0, int1, comp(1152, 70));  // trh192_overlay:reward_claim_prize_graphic
        };
        if ((script17296() == 19)) {
            IF_SETGRAPHIC(27544 as graphic, comp(1152, 86));  // trh192_overlay:target_progress_reward_preview_graphic
            IF_SETHIDE(true, comp(1152, 87));  // trh192_overlay:target_progress_reward_preview_model
            IF_SETHIDE(false, comp(1152, 86));  // trh192_overlay:target_progress_reward_preview_graphic
        } else if ((int2 != -1 as graphic)) {
            IF_SETGRAPHIC(int2, comp(1152, 86));  // trh192_overlay:target_progress_reward_preview_graphic
            IF_SETHIDE(false, comp(1152, 86));  // trh192_overlay:target_progress_reward_preview_graphic
            IF_SETHIDE(true, comp(1152, 87));  // trh192_overlay:target_progress_reward_preview_model
        } else {
            IF_SETOBJECT(int0, int1, comp(1152, 87));  // trh192_overlay:target_progress_reward_preview_model
            IF_SETHIDE(true, comp(1152, 86));  // trh192_overlay:target_progress_reward_preview_graphic
            IF_SETHIDE(false, comp(1152, 87));  // trh192_overlay:target_progress_reward_preview_model
        };
        script17328(int0, MAX(1, int1), string0);
    };
    return;
}