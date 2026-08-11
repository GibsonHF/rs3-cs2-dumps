//
function script9560(): void {
    if ((varclient_3917 > 0)) {
        IF_SETTEXT(varclient_3907, comp(125, 21));  // xmas13_list_naughty:name1
        IF_SETTEXT(inttostring(varclient_3917, 10), comp(125, 26));  // xmas13_list_naughty:score1
    } else {
        IF_SETTEXT("-", comp(125, 21));  // xmas13_list_naughty:name1
        IF_SETTEXT("", comp(125, 26));  // xmas13_list_naughty:score1
    };
    if ((varclient_3918 > 0)) {
        IF_SETTEXT(varclient_3908, 8192022);
        IF_SETTEXT(inttostring(varclient_3918, 10), comp(125, 27));  // xmas13_list_naughty:score2
    } else {
        IF_SETTEXT("-", comp(125, 22));  // xmas13_list_naughty:name2
        IF_SETTEXT("", comp(125, 27));  // xmas13_list_naughty:score2
    };
    if ((varclient_3919 > 0)) {
        IF_SETTEXT(varclient_3909, 8192023);
        IF_SETTEXT(inttostring(varclient_3919, 10), comp(125, 28));  // xmas13_list_naughty:score3
    } else {
        IF_SETTEXT("-", comp(125, 23));  // xmas13_list_naughty:name3
        IF_SETTEXT("", comp(125, 28));  // xmas13_list_naughty:score3
    };
    if ((varclient_3920 > 0)) {
        IF_SETTEXT(varclient_3910, 8192024);
        IF_SETTEXT(inttostring(varclient_3920, 10), comp(125, 29));  // xmas13_list_naughty:score4
    } else {
        IF_SETTEXT("-", comp(125, 24));  // xmas13_list_naughty:name4
        IF_SETTEXT("", comp(125, 29));  // xmas13_list_naughty:score4
    };
    if ((varclient_3921 > 0)) {
        IF_SETTEXT(varclient_3911, 8192025);
        IF_SETTEXT(inttostring(varclient_3921, 10), comp(125, 30));  // xmas13_list_naughty:score5
    } else {
        IF_SETTEXT("-", comp(125, 25));  // xmas13_list_naughty:name5
        IF_SETTEXT("", comp(125, 30));  // xmas13_list_naughty:score5
    };
    return;
}