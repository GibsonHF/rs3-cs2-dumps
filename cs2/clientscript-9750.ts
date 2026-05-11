//
function script9750(): void {
    var string0 = "";
    if (((varplayer_4476 < 2) || (varclient_4189 == 1))) {
        IF_SETHIDE(false, comp(1049, 52));
        if ((IF_GETGRAPHIC(comp(1049, 6)) == 18525 as graphic)) {
            stack(17535);
            stack(68747337);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747337);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 54));
        if ((IF_GETGRAPHIC(comp(1049, 4)) == 18525 as graphic)) {
            stack(17535);
            stack(68747338);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747338);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 56));
        if ((IF_GETGRAPHIC(comp(1049, 2)) == 18525 as graphic)) {
            stack(17535);
            stack(68747339);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747339);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 7));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 5));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 3));
        if ((varclient_4189 == 1)) {
            if ((varplayer_4475 < 3)) {
                stack(17536);
                stack(68747337);
                IF_SETGRAPHIC();
                stack(17535);
                stack(68747338);
                IF_SETGRAPHIC();
                stack(17536);
                stack(68747339);
                IF_SETGRAPHIC();
                string0 = "Party sizes of 1 to 2 are restricted to medium dungeons in Hard Mode.";
            } else {
                stack(17536);
                stack(68747337);
                IF_SETGRAPHIC();
                stack(17536);
                stack(68747338);
                IF_SETGRAPHIC();
                stack(17535);
                stack(68747339);
                IF_SETGRAPHIC();
                string0 = "Party sizes of 3 to 5 are restricted to large dungeons in Hard Mode.";
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747316, -1), 68747316);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747318, -1), 68747318);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747320, -1), 68747320);
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