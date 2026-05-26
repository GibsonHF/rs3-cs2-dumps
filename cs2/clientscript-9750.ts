//
function script9750(): void {
    var string0 = "";
    if (((varplayer_4476 < 2) || (varclient_4189 == 1))) {
        IF_SETHIDE(0, 68747316);
        if ((IF_GETGRAPHIC(68747270) == 18525)) {
            stack(17535);
            stack(68747337);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747337);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(0, 68747318);
        if ((IF_GETGRAPHIC(68747268) == 18525)) {
            stack(17535);
            stack(68747338);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747338);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(0, 68747320);
        if ((IF_GETGRAPHIC(68747266) == 18525)) {
            stack(17535);
            stack(68747339);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747339);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), 68747271);
        IF_SETCOLOUR(script693(125, 125, 125), 68747269);
        IF_SETCOLOUR(script693(125, 125, 125), 68747267);
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
        IF_SETHIDE(1, 68747316);
        IF_SETHIDE(1, 68747318);
        IF_SETHIDE(1, 68747320);
        IF_SETCOLOUR(script693(255, 255, 255), 68747271);
        IF_SETCOLOUR(script693(255, 255, 255), 68747269);
        IF_SETCOLOUR(script693(255, 255, 255), 68747267);
    };
    if ((varplayer_1068 == 1)) {
        IF_SETHIDE(1, 68747316);
        IF_SETHIDE(1, 68747318);
        IF_SETHIDE(1, 68747320);
        IF_SETHIDE(0, 68747321);
    };
    return;
}