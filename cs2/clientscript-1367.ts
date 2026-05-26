//
function script1367(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), 3801103);
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), 3801099);
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, 3801108);
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, 3801108);
    };
    IF_SETTEXT("", 3801101);
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", 3801100);
        IF_SETCOLOUR(65280, 3801100);
        IF_SETTEXT("", 3801101);
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", 3801100);
        IF_SETCOLOUR(16711680, 3801100);
        IF_SETTEXT(`by ${varclient_2731}`, 3801101);
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", 3801100);
        IF_SETCOLOUR(16776960, 3801100);
        IF_SETTEXT("", 3801101);
    };
    IF_SETTEXT("", 3801105);
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", 3801104);
        IF_SETCOLOUR(65280, 3801104);
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", 3801104);
        IF_SETCOLOUR(16711680, 3801104);
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", 3801104);
        IF_SETCOLOUR(16776960, 3801104);
    };
    if ((varbitplayer_4177 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4177, 10)}%`, 3801088);
        IF_SETCOLOUR(16711680, 3801088);
        stack(16874);
        stack(3801093);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4177, 10)}%`, 3801088);
        IF_SETCOLOUR(65280, 3801088);
        stack(16875);
        stack(3801093);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_4178 == 1)) {
        IF_SETTEXT("Unlocked", 3801089);
        IF_SETCOLOUR(16711680, 3801089);
        stack(16873);
        stack(3801094);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT("Locked", 3801089);
        IF_SETCOLOUR(65280, 3801089);
        stack(16872);
        stack(3801094);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_4179 == 1)) {
        IF_SETTEXT("Cleared", 3801090);
        IF_SETCOLOUR(16711680, 3801090);
    } else {
        IF_SETTEXT("Collapsed", 3801090);
        IF_SETCOLOUR(65280, 3801090);
    };
    if ((varbitplayer_4180 == 1)) {
        IF_SETTEXT("Cleared", 3801091);
        IF_SETCOLOUR(16711680, 3801091);
    } else {
        IF_SETTEXT("Collapsed", 3801091);
        IF_SETCOLOUR(65280, 3801091);
    };
    stack(16870);
    stack(3801095);
    IF_SETGRAPHIC();
    stack(16870);
    stack(3801096);
    IF_SETGRAPHIC();
    if ((varbitplayer_4181 == 1)) {
        IF_SETTEXT("Destroyed", 3801092);
        IF_SETCOLOUR(16711680, 3801092);
    } else {
        IF_SETTEXT("Operational", 3801092);
        IF_SETCOLOUR(65280, 3801092);
    };
    stack(16871);
    stack(3801097);
    IF_SETGRAPHIC();
    return;
}