//
function script5504(int0: component): void {
    var string0 = "The potion slot is only available after you have completed the Daemonheim medium tasks.";
    if ((MAP_MEMBERS() == 0)) {
        stack(24444);
        stack(7602195);
        IF_SETGRAPHIC();
        stack(-1);
        stack(int0);
        IF_SETGRAPHIC();
        IF_CLEAROPS(int0);
        string0 = "The potion slot is only available for use on a members world.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
        string0 = "This slot is only for use on a members world.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 7602219, -1), 7602219);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 7602220, -1), 7602220);
        return;
    };
    if ((varbitplayer_20534 == 0)) {
        string0 = "This slot is only available after you have completed the Daemonheim hard tasks.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 7602219, -1), 7602219);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 7602220, -1), 7602220);
    };
    if ((varbitplayer_20532 == 0)) {
        stack(24444);
        stack(7602195);
        IF_SETGRAPHIC();
        stack(-1);
        stack(int0);
        IF_SETGRAPHIC();
        IF_CLEAROPS(int0);
        string0 = "The potion slot is only available after you have completed the Daemonheim medium tasks.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
        return;
    };
    if ((varplayer_3857 == -1 as obj)) {
        stack(24444);
        stack(7602195);
        IF_SETGRAPHIC();
        stack(-1);
        stack(int0);
        IF_SETGRAPHIC();
        IF_CLEAROPS(int0);
        string0 = "To bind a potion, right click it and select Bind. You may claim a bound potion from this slot once per floor.";
    } else {
        stack(-1);
        stack(7602195);
        IF_SETGRAPHIC();
        IF_SETOBJECT_NONUM(varplayer_3857, 1, int0);
        if ((varbitplayer_20478 == 1)) {
            IF_CLEAROPS(int0);
            IF_SETOP(10, "Examine", int0);
            IF_SETOPBASE(`<col=ff9040>${OC_NAME(varplayer_3857)}`, int0);
            string0 = "To bind a potion, right click it and select Bind. You have already claimed a potion on this floor.";
        } else {
            IF_SETOP(1, "Take", int0);
            IF_SETOP(10, "Examine", int0);
            IF_SETOPBASE(`<col=ff9040>${OC_NAME(varplayer_3857)}`, int0);
            string0 = "To bind a potion, right click it and select Bind. You may claim a bound potion from this slot once per floor.";
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}