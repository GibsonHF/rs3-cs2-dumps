//[clientscript,objdialog_onkey]
function script574(int0: int, int1: unknown_int): void {
    if ((int0 == 84)) {
        varclient_81 = 0;
        IF_SETONTIMER(callback(), comp(389, 7));
        script576();
        return;
    };
    if ((int0 == 13)) {
        if ((script9666() == 1)) {
            return;
        };
        IF_CLOSE();
        script573();
        return;
    };
    var string0 = script74(varclient_2506, 0, int0, int1);
    if ((strcmp(varclient_2506, string0) == 0)) {
        return;
    };
    varclient_2506 = string0;
    IF_SETTEXT(`${ESCAPE(varclient_2506)}*`, comp(389, 7));
    varclient_81 = 5;
    IF_SETONTIMER(callback(script575), comp(389, 7));
    return;
}