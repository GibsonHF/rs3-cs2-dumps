//
function script20224(): void {
    script20211(0);
    CC_DELETEALL(comp(1401, 44));  // league_onboarding:contents_splash_scrolling
    var int0 = (IF_GETWIDTH(comp(1401, 16)) - 24);  // league_onboarding:contents_splash
    var int1 = 0;
    if ((IF_FIND(comp(1401, 44)) == 1)) {  // league_onboarding:contents_splash_scrolling
        int1 = script20191(int0);
        script19620(91815981, 91815980, int1, -1, -1, 0, 24, 44);
    };
    return;
}