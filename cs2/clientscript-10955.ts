//
function script10955(): void {
    script10957();
    if ((varbitplayer_26867 == 0)) {
        if ((varbitplayer_26868 == 0)) {
            script10958();
        } else if ((IF_GETHEIGHT(comp(1583, 8) /*trh44_valentines15_milestones:hate_fill*/) == IF_GETHEIGHT(comp(1583, 9) /*trh44_valentines15_milestones:love_fill*/))) {
            if ((varbitplayer_26858 == 1)) {
                script10959();
            } else {
                script10960();
            };
        } else {
            script10960();
        };
    } else if ((IF_GETHEIGHT(comp(1583, 8) /*trh44_valentines15_milestones:hate_fill*/) == IF_GETHEIGHT(comp(1583, 9) /*trh44_valentines15_milestones:love_fill*/))) {
        if ((varbitplayer_26858 == 1)) {
            script10959();
        } else {
            script10960();
        };
    } else {
        script10960();
    };
    IF_SETHIDE(true, comp(1583, 25));  // trh44_valentines15_milestones:petals
    IF_SETHIDE(true, comp(1583, 75));  // trh44_valentines15_milestones:love_button_active_layer
    IF_SETHIDE(true, comp(1583, 83));  // trh44_valentines15_milestones:hate_button_active_layer
    IF_SETHIDE(true, comp(1583, 91));  // trh44_valentines15_milestones:flip_button_active_layer
    IF_SETHIDE(true, comp(1583, 97));  // trh44_valentines15_milestones:popup_layer
    return;
}