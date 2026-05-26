//
function script18129(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = 0;
    if ((script17853() != -1 as dbrow)) {
        string0 = dbrow_getfield(script17853(), 991232, 0);
        string1 = "Level up in the Hero Pass to unlock epic rewards!";
        int0 = 4116;
        IF_SETHIDE(1, 88145934);
        IF_SETHIDE(1, 88145933);
        IF_SETTEXT("Hero Pass", 88145930);
        stack(int0);
        stack(88145932);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145931);
        IF_SETONMOUSELEAVE(callback(script8805), 88145931);
    } else {
        [int1, string0, string1, int0] = script18235();
        IF_SETHIDE(int1, 88145936);
        IF_SETTEXT(string0, 88145934);
        IF_SETTEXT("", 88145930);
        stack(int0);
        stack(88145932);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145931);
        IF_SETONMOUSELEAVE(callback(script8805), 88145931);
    };
    return;
}