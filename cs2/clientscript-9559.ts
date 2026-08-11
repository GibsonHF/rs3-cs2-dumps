//
function script9559(): void {
    if ((varclient_3917 > 0)) {
        IF_SETTEXT(varclient_3907, comp(890, 19));  // xmas13_list_nice:name1
        IF_SETTEXT(inttostring(varclient_3917, 10), comp(890, 24));  // xmas13_list_nice:score1
    } else {
        IF_SETTEXT("-", comp(890, 19));  // xmas13_list_nice:name1
        IF_SETTEXT("", comp(890, 24));  // xmas13_list_nice:score1
    };
    if ((varclient_3918 > 0)) {
        IF_SETTEXT(varclient_3908, 58327060);
        IF_SETTEXT(inttostring(varclient_3918, 10), comp(890, 25));  // xmas13_list_nice:score2
    } else {
        IF_SETTEXT("-", comp(890, 20));  // xmas13_list_nice:name2
        IF_SETTEXT("", comp(890, 25));  // xmas13_list_nice:score2
    };
    if ((varclient_3919 > 0)) {
        IF_SETTEXT(varclient_3909, 58327061);
        IF_SETTEXT(inttostring(varclient_3919, 10), comp(890, 26));  // xmas13_list_nice:score3
    } else {
        IF_SETTEXT("-", comp(890, 21));  // xmas13_list_nice:name3
        IF_SETTEXT("", comp(890, 26));  // xmas13_list_nice:score3
    };
    if ((varclient_3920 > 0)) {
        IF_SETTEXT(varclient_3910, 58327062);
        IF_SETTEXT(inttostring(varclient_3920, 10), comp(890, 27));  // xmas13_list_nice:score4
    } else {
        IF_SETTEXT("-", comp(890, 22));  // xmas13_list_nice:name4
        IF_SETTEXT("", comp(890, 27));  // xmas13_list_nice:score4
    };
    if ((varclient_3921 > 0)) {
        IF_SETTEXT(varclient_3911, 58327063);
        IF_SETTEXT(inttostring(varclient_3921, 10), comp(890, 28));  // xmas13_list_nice:score5
    } else {
        IF_SETTEXT("-", comp(890, 23));  // xmas13_list_nice:name5
        IF_SETTEXT("", comp(890, 28));  // xmas13_list_nice:score5
    };
    return;
}