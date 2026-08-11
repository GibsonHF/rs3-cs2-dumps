//
function script8765(): void {
    if ((varbitplayer_20711 > 0)) {
        IF_SETHIDE(false, comp(246, 26));  // oct13_reward_shop:confirm_buy
        CC_DELETEALL(comp(246, 6));  // oct13_reward_shop:confirm_buy_window
        CC_CREATE(comp(246, 6), 5, 0);  // oct13_reward_shop:confirm_buy_window
        if ((varbitplayer_20711 > 3)) {
            CC_SETPOSITION(0, 16, 1, 0);
            CC_SETSIZE(48, 48, 0, 0);
        } else {
            CC_SETPOSITION(0, 24, 1, 0);
            CC_SETSIZE(36, 32, 0, 0);
        };
        switch (varbitplayer_20711) {
            case 1: {
                if ((PLAYERMEMBER() == false)) {
                    CC_SETOBJECT(29933 as obj, 1);
                } else {
                    CC_SETOBJECT(29934 as obj, 1);
                };
                break;
            }
            case 2: {
                if ((PLAYERMEMBER() == false)) {
                    CC_SETOBJECT(29934 as obj, 1);
                } else {
                    CC_SETOBJECT(29935 as obj, 1);
                };
                break;
            }
            case 3: {
                CC_SETOBJECT(29929 as obj, 1);
                IF_SETTEXT("Claim", comp(246, 49));  // oct13_reward_shop:oct13_confirm_button_text
                break;
            }
            case 4: {
                CC_SETGRAPHIC(20536 as graphic);
                IF_SETTEXT("Claim", comp(246, 49));  // oct13_reward_shop:oct13_confirm_button_text
                break;
            }
            case 5: {
                CC_SETGRAPHIC(11744 as graphic);
                IF_SETTEXT("Claim", comp(246, 49));  // oct13_reward_shop:oct13_confirm_button_text
                break;
            }
        };
    } else {
        CC_DELETEALL(comp(246, 6));  // oct13_reward_shop:confirm_buy_window
        IF_SETHIDE(true, comp(246, 26));  // oct13_reward_shop:confirm_buy
    };
    return;
}