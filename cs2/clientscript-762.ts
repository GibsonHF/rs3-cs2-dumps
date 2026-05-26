//
function script762(): void {
    var int0 = (varbitplayer_3292 + varbitplayer_20973);
    IF_SETMODELANGLE(0, 0, 4, 4, 0, (3900 - (int0 * 100)), 45613061);
    IF_SETPOSITION(0, 60, 1, 1, 45613061);
    IF_RESETMODELLIGHTING(45613061);
    IF_SETMODELLIGHTING(1024, 179, 0, 255, 255, 255, -50, -60, -50, 3224, 45613061);
    IF_SETONOP(callback(script1308, 1), 45613063);
    IF_SETONOP(callback(script1308, 1), 45613057);
    IF_SETONOP(callback(script1308, 2), 45613069);
    IF_SETONOP(callback(script1308, 2), 45613058);
    IF_SETONOP(callback(script1308, 3), 45613071);
    IF_SETONOP(callback(script1308, 4), 45613099);
    IF_SETONOP(callback(script1308, 5), 45613129);
    IF_SETONOP(callback(script1308, 6), 45613143);
    IF_SETONOP(callback(script1308, 7), 45613154);
    IF_SETOP(1, "Unlock", 45613069);
    IF_SETOPCURSOR(1, 201, 45613069);
    IF_SETOP(1, "Feed", 45613071);
    IF_SETOPCURSOR(1, 202, 45613071);
    IF_SETOP(1, "Slay", 45613063);
    IF_SETOPCURSOR(1, 42, 45613063);
    var int1 = enum_getvalue(0, 0, 1072, (varbitplayer_20973 + 1));
    if (((varbitplayer_3292 < 6) && (script6950() > 0))) {
        IF_SETGRAPHIC(1933, 45613110);
        IF_SETGRAPHIC(1935, 45613111);
        IF_SETGRAPHIC(1934, 45613112);
        IF_SETTEXT("Feed a Key", 45613113);
    } else {
        IF_SETGRAPHIC(1945, 45613110);
        IF_SETGRAPHIC(1947, 45613111);
        IF_SETGRAPHIC(1946, 45613112);
        if ((script6950() == 0)) {
            IF_SETTEXT("No Keys", 45613113);
        } else {
            IF_SETTEXT("Full", 45613113);
        };
    };
    if ((varbitplayer_3292 > 1)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 - 1)), 10)}`, 45613065);
    } else {
        IF_SETTEXT("", 45613065);
    };
    IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, varbitplayer_3292), 10)}`, 45613066);
    if ((varbitplayer_3292 < 6)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 + 1)), 10)}`, 45613067);
    } else {
        IF_SETTEXT("", 45613067);
    };
    return;
}