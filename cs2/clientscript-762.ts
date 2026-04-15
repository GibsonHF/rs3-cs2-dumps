//
function script762(): void {
    var int0 = (varbitplayer_3292 + varbitplayer_20973);
    IF_SETMODELANGLE(0, 0, 4, 4, 0, (3900 - (int0 * 100)), comp(696, 5));
    IF_SETPOSITION(0, 60, 1, 1, comp(696, 5));
    IF_RESETMODELLIGHTING(comp(696, 5));
    IF_SETMODELLIGHTING(1024, 179, 0, 255, 255, 255, -50, -60, -50, 3224 as material, comp(696, 5));
    IF_SETONOP(callback(script1308, 1), comp(696, 7));
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
        stack(1933);
        stack(45613110);
        IF_SETGRAPHIC();
        stack(1935);
        stack(45613111);
        IF_SETGRAPHIC();
        stack(1934);
        stack(45613112);
        IF_SETGRAPHIC();
        IF_SETTEXT("Feed a Key", 45613113);
    } else {
        stack(1945);
        stack(45613110);
        IF_SETGRAPHIC();
        stack(1947);
        stack(45613111);
        IF_SETGRAPHIC();
        stack(1946);
        stack(45613112);
        IF_SETGRAPHIC();
        if ((script6950() == 0)) {
            IF_SETTEXT("No Keys", comp(696, 57));
        } else {
            IF_SETTEXT("Full", comp(696, 57));
        };
    };
    if ((varbitplayer_3292 > 1)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 - 1)), 10)}`, comp(696, 9));
    } else {
        IF_SETTEXT("", comp(696, 9));
    };
    IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, varbitplayer_3292), 10)}`, comp(696, 10));
    if ((varbitplayer_3292 < 6)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 + 1)), 10)}`, comp(696, 11));
    } else {
        IF_SETTEXT("", comp(696, 11));
    };
    return;
}