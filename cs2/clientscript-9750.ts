//
function script9750(): void {
    var string0 = "";
    if (((varplayer_4476 < 2) || (varclient_4189 == 1))) {
        IF_SETHIDE(false, comp(1049, 52));
        if ((IF_GETGRAPHIC(comp(1049, 6)) == 18525 as graphic)) {
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 73));
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));
        };
        IF_SETHIDE(false, comp(1049, 54));
        if ((IF_GETGRAPHIC(comp(1049, 4)) == 18525 as graphic)) {
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 74));
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 74));
        };
        IF_SETHIDE(false, comp(1049, 56));
        if ((IF_GETGRAPHIC(comp(1049, 2)) == 18525 as graphic)) {
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 75));
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 75));
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 7));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 5));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 3));
        if ((varclient_4189 == 1)) {
            if ((varplayer_4475 < 3)) {
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));
                IF_SETGRAPHIC(17535 as graphic, comp(1049, 74));
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 75));
                string0 = "Party sizes of 1 to 2 are restricted to medium dungeons in Hard Mode.";
            } else {
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 74));
                IF_SETGRAPHIC(17535 as graphic, comp(1049, 75));
                string0 = "Party sizes of 3 to 5 are restricted to large dungeons in Hard Mode.";
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747316, -1), comp(1049, 52));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747318, -1), comp(1049, 54));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747320, -1), comp(1049, 56));
        };
    } else {
        IF_SETHIDE(true, comp(1049, 52));
        IF_SETHIDE(true, comp(1049, 54));
        IF_SETHIDE(true, comp(1049, 56));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 7));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 5));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 3));
    };
    if ((varplayer_1068 == 1)) {
        IF_SETHIDE(true, comp(1049, 52));
        IF_SETHIDE(true, comp(1049, 54));
        IF_SETHIDE(true, comp(1049, 56));
        IF_SETHIDE(false, comp(1049, 57));
    };
    return;
}