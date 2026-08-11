//
function script10962(): void {
    var string0 = "Unlocked!";
    if ((script4148() == 1)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(comp(1583, 9));  // trh44_valentines15_milestones:love_fill
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, comp(1583, 35));  // trh44_valentines15_milestones:love_low_cost
        IF_SETHIDE(false, comp(1583, 54));  // trh44_valentines15_milestones:love_low_highlight
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, comp(1583, 33));  // trh44_valentines15_milestones:love_med_cost
        IF_SETHIDE(false, comp(1583, 53));  // trh44_valentines15_milestones:love_med_highlight
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", comp(1583, 31));  // trh44_valentines15_milestones:love_high_cost
        IF_SETHIDE(false, comp(1583, 52));  // trh44_valentines15_milestones:love_high_highlight
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", comp(1583, 30));  // trh44_valentines15_milestones:love_absurd_cost
        IF_SETHIDE(false, comp(1583, 51));  // trh44_valentines15_milestones:love_absurd_highlight
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(false, comp(1583, 68));  // trh44_valentines15_milestones:bubbles
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(comp(1583, 8)) >= 398))) {  // trh44_valentines15_milestones:hate_fill
        IF_SETTEXT("Unlocked!", comp(1583, 28));  // trh44_valentines15_milestones:insane_cost
        IF_SETHIDE(false, comp(1583, 50));  // trh44_valentines15_milestones:insane_highlight
    };
    return;
}