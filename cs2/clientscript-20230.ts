//
function script20230(): void {
    script20211(0);
    CC_DELETEALL(comp(1401, 34));  // league_onboarding:contents_confirm_fixed
    if ((IF_FIND(comp(1401, 34)) == 1)) {  // league_onboarding:contents_confirm_fixed
        script20231();
    };
    CC_DELETEALL(comp(1401, 48));  // league_onboarding:contents_confirm_scrolling
    if ((IF_FIND(comp(1401, 48)) == 1)) {  // league_onboarding:contents_confirm_scrolling
        script20233();
    };
    return;
}