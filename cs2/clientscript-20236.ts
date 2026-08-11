//
function script20236(): void {
    IF_SETTEXT(`Sync your ${script20128()} progress with the RuneScape Wiki to unlock extra statistics, including task completion rates, and filter tasks based on your progress.`, comp(1406, 6));  // league_onboarding_wiki:wiki_text
    if ((script6431() == 1)) {
        IF_SETTEXT("", comp(1406, 9));  // league_onboarding_wiki:interface_sharing_title
        IF_SETTEXT("", comp(1406, 10));  // league_onboarding_wiki:interface_sharing_text
    } else {
        IF_SETTEXT("Prefer your own layout? Press Escape, select Edit Layout Mode, then enter your display name in Interface Sharing to load your RuneScape interface.", comp(1406, 10));  // league_onboarding_wiki:interface_sharing_text
    };
    IF_SETTEXT("You can change this setting at any time.", comp(1406, 8));  // league_onboarding_wiki:wiki_smallprint
    if ((varbitplayer_58366 == 1)) {
        IF_SETENABLED(false, comp(1406, 12));  // league_onboarding_wiki:wiki_link
        IF_SETTEXT("Enabled", comp(1406, 12));  // league_onboarding_wiki:wiki_link
    } else {
        IF_SETENABLED(true, comp(1406, 12));  // league_onboarding_wiki:wiki_link
        IF_SETTEXT("Enable WikiSync", comp(1406, 12));  // league_onboarding_wiki:wiki_link
    };
    return;
}