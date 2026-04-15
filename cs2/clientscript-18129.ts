//
function script18129(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = false;
    if ((script17853() != -1 as dbrow)) {
        string0 = dbrow_getfield(script17853(), 991232, 0);
        string1 = "Level up in the Hero Pass to unlock epic rewards!";
        int0 = 4116;
        IF_SETHIDE(true, comp(1345, 14));
        IF_SETHIDE(true, comp(1345, 13));
        IF_SETTEXT("Hero Pass", comp(1345, 10));
        stack(int0);
        stack(88145932);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145931);
        IF_SETONMOUSELEAVE(callback(script8805), 88145931);
    } else {
        [int1, string0, string1, int0] = script18235();
        IF_SETHIDE(int1, comp(1345, 16));
        IF_SETTEXT(string0, comp(1345, 14));
        IF_SETTEXT("", comp(1345, 10));
        stack(int0);
        stack(88145932);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145931);
        IF_SETONMOUSELEAVE(callback(script8805), 88145931);
    };
    return;
}