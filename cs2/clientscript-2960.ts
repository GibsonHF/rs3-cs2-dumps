//
function script2960(): void {
    if ((varbitplayer_42240 == 1)) {
        IF_SETGRAPHIC(18543 as graphic, comp(1615, 361));  // trh53_spring_cleaner_updated:current_rect_5
    } else {
        IF_SETGRAPHIC(18541 as graphic, comp(1615, 361));  // trh53_spring_cleaner_updated:current_rect_5
    };
    if ((script6431() == 1)) {
        IF_SETTEXT("Sentience", comp(1615, 359));  // trh53_spring_cleaner_updated:layer_31
        IF_SETHIDE(true, comp(1615, 360));  // trh53_spring_cleaner_updated:info_holder_active_38
        IF_SETHIDE(true, comp(1615, 361));  // trh53_spring_cleaner_updated:current_rect_5
    };
    return;
}