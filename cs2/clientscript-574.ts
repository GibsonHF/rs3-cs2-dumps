//[clientscript,objdialog_onkey]
function script574(int0: number, int1: number): void {
    if ((int0 == 84)) {
        varclient_81 = 0;
        IF_SETONTIMER(callback(), 25493511);
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
    IF_SETTEXT(`${ESCAPE(varclient_2506)}*`, 25493511);
    varclient_81 = 5;
    IF_SETONTIMER(callback(script575), 25493511);
    return;
}