//
function script13027(): void {
    if ((varbitplayer_34903 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, comp(1824, 33));  // trh116_valentines_shop:staff_of_devotion_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 33));  // trh116_valentines_shop:staff_of_devotion_price
        IF_SETHIDE(false, comp(1824, 29));  // trh116_valentines_shop:staff_of_devotion_button_disabled
    };
    if ((varbitplayer_34907 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(200, 1)}`, comp(1824, 78));  // trh116_valentines_shop:heart_balloon_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 78));  // trh116_valentines_shop:heart_balloon_price
        IF_SETHIDE(false, comp(1824, 74));  // trh116_valentines_shop:heart_balloon_button_disabled
    };
    if ((varbitplayer_34923 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(300, 1)}`, comp(1824, 100));  // trh116_valentines_shop:loved_up_rest_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 100));  // trh116_valentines_shop:loved_up_rest_price
        IF_SETHIDE(false, comp(1824, 96));  // trh116_valentines_shop:loved_up_rest_button_disabled
    };
    if ((varbitplayer_34922 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(350, 1)}`, comp(1824, 67));  // trh116_valentines_shop:loved_up_walk_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 67));  // trh116_valentines_shop:loved_up_walk_price
        IF_SETHIDE(false, comp(1824, 63));  // trh116_valentines_shop:loved_up_walk_button_disabled
    };
    if ((varbitplayer_34902 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, comp(1824, 89));  // trh116_valentines_shop:loved_up_loot_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 89));  // trh116_valentines_shop:loved_up_loot_price
        IF_SETHIDE(false, comp(1824, 85));  // trh116_valentines_shop:loved_up_loot_button_disabled
    };
    if ((varbitplayer_34908 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, comp(1824, 111));  // trh116_valentines_shop:bunch_of_flowers_price
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 111));  // trh116_valentines_shop:bunch_of_flowers_price
        IF_SETHIDE(false, comp(1824, 107));  // trh116_valentines_shop:bunch_of_flowers_button_disabled
    };
    if ((varbitplayer_34903 == 1)) {
        if ((varbitplayer_34907 == 1)) {
            if ((varbitplayer_34923 == 1)) {
                if ((varbitplayer_34922 == 1)) {
                    if ((varbitplayer_34902 == 1)) {
                        if ((varbitplayer_34908 == 1)) {
                            IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
                        } else {
                            IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
                            IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
                        };
                    } else {
                        IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
                        IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
                    };
                } else {
                    IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
                    IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
                };
            } else {
                IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
                IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
            };
        } else {
            IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
            IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
        };
    } else {
        IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));  // trh116_valentines_shop:prismatic_star_price
        IF_SETHIDE(false, comp(1824, 118));  // trh116_valentines_shop:prismatic_star_button_disabled
    };
    return;
}