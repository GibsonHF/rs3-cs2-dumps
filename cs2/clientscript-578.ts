//[proc,objdialog_doscrollbar]
function script578(): void {
    var int0 = IF_GETHEIGHT(comp(389, 2));
    var int1 = IF_GETSCROLLHEIGHT(comp(389, 2));
    if ((int1 < int0)) {
        IF_SETSCROLLSIZE(0, 0, comp(389, 2));
        IF_SETHIDE(true, comp(389, 5));
    } else {
        IF_SETHIDE(false, comp(389, 5));
    };
    var int2 = (int1 - int0);
    if ((int2 < 0)) {
        int2 = 0;
    };
    var int3 = IF_GETSCROLLY(comp(389, 2));
    if ((int3 > int2)) {
        int3 = int2;
    };
    script72(comp(389, 5), comp(389, 2), int3);
    return;
}