//
function script10964(): void {
    var string0 = "Unlocked!";
    if ((script4148() == 1)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, comp(1583, 36));  // trh44_valentines15_milestones:hate_low_cost
        IF_SETHIDE(false, comp(1583, 58));  // trh44_valentines15_milestones:hate_low_highlight
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, comp(1583, 34));  // trh44_valentines15_milestones:hate_med_cost
        IF_SETHIDE(false, comp(1583, 57));  // trh44_valentines15_milestones:hate_med_highlight
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", comp(1583, 32));  // trh44_valentines15_milestones:hate_high_cost
        IF_SETHIDE(false, comp(1583, 56));  // trh44_valentines15_milestones:hate_high_highlight
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", comp(1583, 29));  // trh44_valentines15_milestones:hate_absurd_cost
        IF_SETHIDE(false, comp(1583, 55));  // trh44_valentines15_milestones:hate_absurd_highlight
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(false, comp(1583, 69));  // trh44_valentines15_milestones:bubbles_1
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(comp(1583, 9)) >= 398))) {  // trh44_valentines15_milestones:love_fill
        IF_SETTEXT("Unlocked!", comp(1583, 28));  // trh44_valentines15_milestones:insane_cost
        IF_SETHIDE(false, comp(1583, 50));  // trh44_valentines15_milestones:insane_highlight
    };
    return;
}