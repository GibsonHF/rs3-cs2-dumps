//
function script1908(): void {
    var int0 = 12;
    var string0 = "";
    IF_SETSIZE(16, ((((varclient_564 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 98));
    IF_SETSIZE(16, ((((varclient_565 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 99));
    IF_SETSIZE(16, ((((varclient_566 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 100));
    IF_SETSIZE(16, ((((varclient_567 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 104));
    IF_SETSIZE(16, ((((varclient_568 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 108));
    IF_SETSIZE(16, ((((varclient_569 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 63));
    IF_SETSIZE(16, ((((varclient_570 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 67));
    IF_SETSIZE(16, ((((varclient_571 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 71));
    IF_SETSIZE(16, ((((varclient_572 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 75));
    IF_SETSIZE(16, ((((varclient_573 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 44));
    IF_SETSIZE(16, ((((varclient_574 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 48));
    IF_SETSIZE(16, ((((varclient_575 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 52));
    IF_SETSIZE(16, ((((varclient_576 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 56));
    IF_SETSIZE(16, ((((varclient_577 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 82));
    IF_SETSIZE(16, ((((varclient_578 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 86));
    IF_SETSIZE(16, ((((varclient_579 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 90));
    IF_SETSIZE(16, ((((varclient_580 * 100) / int0) * 16384) / 100), 0, 2, comp(806, 94));
    if ((varclient_564 == 0)) {
        string0 = "There are no class 1 clay locations in the area.";
    } else if ((varclient_564 == 1)) {
        string0 = "There is 1 class 1 clay location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_564, 10)} class 1 clay locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822114);
    if ((varclient_565 == 0)) {
        string0 = "There are no class 2 fishing locations in the area.";
    } else if ((varclient_565 == 1)) {
        string0 = "There is 1 class 2 fishing location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_565, 10)} class 2 fishing locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822115);
    if ((varclient_566 == 0)) {
        string0 = "There are no class 3 fishing locations in the area.";
    } else if ((varclient_566 == 1)) {
        string0 = "There is 1 class 3 fishing location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_566, 10)} class 3 fishing locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822116);
    if ((varclient_567 == 0)) {
        string0 = "There are no class 4 fishing locations in the area.";
    } else if ((varclient_567 == 1)) {
        string0 = "There is 1 class 4 fishing location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_567, 10)} class 4 fishing locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822120);
    if ((varclient_568 == 0)) {
        string0 = "There are no class 5 fishing locations in the area.";
    } else if ((varclient_568 == 1)) {
        string0 = "There is 1 class 5 fishing location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_568, 10)} class 5 fishing locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822124);
    if ((varclient_569 == 0)) {
        string0 = "There are no class 2 mining locations in the area.";
    } else if ((varclient_569 == 1)) {
        string0 = "There is 1 class 2 mining location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_569, 10)} class 2 mining locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822079);
    if ((varclient_570 == 0)) {
        string0 = "There are no class 3 mining locations in the area.";
    } else if ((varclient_570 == 1)) {
        string0 = "There is 1 class 3 mining location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_570, 10)} class 3 mining locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822083);
    if ((varclient_571 == 0)) {
        string0 = "There are no class 4 mining locations in the area.";
    } else if ((varclient_571 == 1)) {
        string0 = "There is 1 class 4 mining location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_571, 10)} class 4 mining locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822087);
    if ((varclient_572 == 0)) {
        string0 = "There are no class 5 mining locations in the area.";
    } else if ((varclient_572 == 1)) {
        string0 = "There is 1 class 5 mining location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_572, 10)} class 5 mining locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822091);
    if ((varclient_573 == 0)) {
        string0 = "There are no class 2 woodcutting locations in the area.";
    } else if ((varclient_573 == 1)) {
        string0 = "There is 1 class 2 woodcutting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_573, 10)} class 2 woodcutting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822060);
    if ((varclient_574 == 0)) {
        string0 = "There are no class 3 woodcutting locations in the area.";
    } else if ((varclient_574 == 1)) {
        string0 = "There is 1 class 3 woodcutting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_574, 10)} class 3 woodcutting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822064);
    if ((varclient_575 == 0)) {
        string0 = "There are no class 4 woodcutting locations in the area.";
    } else if ((varclient_575 == 1)) {
        string0 = "There is 1 class 4 woodcutting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_575, 10)} class 4 woodcutting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822068);
    if ((varclient_576 == 0)) {
        string0 = "There are no class 5 woodcutting locations in the area.";
    } else if ((varclient_576 == 1)) {
        string0 = "There is 1 class 5 woodcutting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_576, 10)} class 5 woodcutting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822072);
    if ((varclient_577 == 0)) {
        string0 = "There are no class 2 hunting locations in the area.";
    } else if ((varclient_577 == 1)) {
        string0 = "There is 1 class 2 hunting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_577, 10)} class 2 hunting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822098);
    if ((varclient_578 == 0)) {
        string0 = "There are no class 3 hunting locations in the area.";
    } else if ((varclient_578 == 1)) {
        string0 = "There is 1 class 3 hunting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_578, 10)} class 3 hunting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822102);
    if ((varclient_579 == 0)) {
        string0 = "There are no class 4 hunting locations in the area.";
    } else if ((varclient_579 == 1)) {
        string0 = "There is 1 class 4 hunting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_579, 10)} class 4 hunting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822106);
    if ((varclient_580 == 0)) {
        string0 = "There are no class 5 hunting locations in the area.";
    } else if ((varclient_580 == 1)) {
        string0 = "There is 1 class 5 hunting location in the area.";
    } else {
        string0 = `There are ${inttostring(varclient_580, 10)} class 5 hunting locations in the area.`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 52822110);
    return;
}