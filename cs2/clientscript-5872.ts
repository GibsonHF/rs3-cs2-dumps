//
function script5872(): void {
    var string0 = "The potion slot is only available after you have completed the Daemonheim medium tasks.";
    var int0 = comp(116, 30);  // rand_bound_interface:potion_item
    var int1 = comp(116, 29);  // rand_bound_interface:potion_blank
    var int2 = comp(116, 118);  // rand_bound_interface:potion_slot_blocked
    var int3 = comp(116, 115);  // rand_bound_interface:bound_item_15_blocked
    var int4 = comp(116, 116);  // rand_bound_interface:bound_item_16_blocked
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int4);
        IF_SETGRAPHIC(24444 as graphic, int1);
        IF_SETGRAPHIC(-1 as graphic, int0);
        IF_CLEAROPS(int0);
        string0 = "The potion slot is only available for use on a members world.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int2, -1), int2);
        string0 = "This slot is only for use on a members world.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int3, -1), int3);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int4, -1), int4);
        return;
    };
    if ((varbitplayer_20534 == 0)) {
        string0 = "This slot is only available after you have completed the Daemonheim hard tasks.";
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int4);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int3, -1), int3);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int4, -1), int4);
    };
    if ((varbitplayer_20532 == 0)) {
        IF_SETHIDE(false, int2);
        IF_SETGRAPHIC(24444 as graphic, int1);
        IF_SETGRAPHIC(-1 as graphic, int0);
        IF_CLEAROPS(int0);
        string0 = "The potion slot is only available after you have completed the Daemonheim medium tasks.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int2, -1), int2);
        return;
    };
    if ((varplayer_3857 == -1 as obj)) {
        IF_SETGRAPHIC(24444 as graphic, int1);
        IF_SETGRAPHIC(-1 as graphic, int0);
        IF_CLEAROPS(int0);
        string0 = "To bind a potion, right click it and select Bind. You may claim a bound potion from this slot once per floor.";
    } else {
        IF_SETGRAPHIC(-1 as graphic, int1);
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