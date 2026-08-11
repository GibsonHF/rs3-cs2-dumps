//
function script1773(): void {
    if ((varclient_249 == false)) {
        IF_SETCOLOUR(0, comp(791, 110));  // clanwars_setup:itemloss_background
        IF_SETCOLOUR(16750623, comp(791, 111));  // clanwars_setup:itemloss_title
        IF_SETHIDE(true, comp(791, 113));  // clanwars_setup:itemloss_indicator
        script2731(51839090, -1, 3);
        IF_SETTEXT("...you keep<br>your items.", comp(791, 114));  // clanwars_setup:itemloss_text
    } else {
        IF_SETCOLOUR(16711680, comp(791, 110));  // clanwars_setup:itemloss_background
        IF_SETCOLOUR(16776960, comp(791, 111));  // clanwars_setup:itemloss_title
        IF_SETHIDE(false, comp(791, 113));  // clanwars_setup:itemloss_indicator
        script2731(51839090, -1, 16776960);
        IF_SETTEXT("...you DROP ALL your items.", comp(791, 114));  // clanwars_setup:itemloss_text
    };
    script1784();
    return;
}