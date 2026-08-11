//
function script2960(): void {
    if ((varbitplayer_42240 == 1)) {
        IF_SETGRAPHIC(18543 as graphic, comp(1615, 384));  // trh53_spring_cleaner_updated:sentience_toggle_mute_current
    } else {
        IF_SETGRAPHIC(18541 as graphic, comp(1615, 384));  // trh53_spring_cleaner_updated:sentience_toggle_mute_current
    };
    if ((script6431() == 1)) {
        IF_SETTEXT("Sentience", comp(1615, 382));  // trh53_spring_cleaner_updated:current_text_10
        IF_SETHIDE(true, comp(1615, 383));  // trh53_spring_cleaner_updated:current_text_mute
        IF_SETHIDE(true, comp(1615, 384));  // trh53_spring_cleaner_updated:sentience_toggle_mute_current
    };
    return;
}