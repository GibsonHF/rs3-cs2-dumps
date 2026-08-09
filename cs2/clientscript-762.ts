//
function script762(): void {
    var int0 = (varbitplayer_3292 + varbitplayer_20973);
    IF_SETMODELANGLE(0, 0, 4, 4, 0, (3900 - (int0 * 100)), comp(696, 5));
    IF_SETPOSITION(0, 60, 1, 1, comp(696, 5));
    IF_RESETMODELLIGHTING(comp(696, 5));
    IF_SETMODELLIGHTING(1024, 179, 0, 255, 255, 255, -50, -60, -50, 3224 as material, comp(696, 5));
    IF_SETONOP(callback(script1308, 1), comp(696, 7));
    IF_SETONOP(callback(script1308, 1), comp(696, 1));
    IF_SETONOP(callback(script1308, 2), comp(696, 13));
    IF_SETONOP(callback(script1308, 2), comp(696, 2));
    IF_SETONOP(callback(script1308, 3), comp(696, 15));
    IF_SETONOP(callback(script1308, 4), comp(696, 43));
    IF_SETONOP(callback(script1308, 5), comp(696, 73));
    IF_SETONOP(callback(script1308, 6), comp(696, 87));
    IF_SETONOP(callback(script1308, 7), comp(696, 98));
    IF_SETOP(1, "Unlock", comp(696, 13));
    IF_SETOPCURSOR(1, 201, comp(696, 13));
    IF_SETOP(1, "Feed", comp(696, 15));
    IF_SETOPCURSOR(1, 202, comp(696, 15));
    IF_SETOP(1, "Slay", comp(696, 7));
    IF_SETOPCURSOR(1, 42, comp(696, 7));
    var int1 = enum_getvalue(0, 0, 1072 as cs2enum, (varbitplayer_20973 + 1));
    if ((varbitplayer_3292 < 6)) {
        if ((script6950() > 0)) {
            IF_SETGRAPHIC(1933 as graphic, comp(696, 54));
            IF_SETGRAPHIC(1935 as graphic, comp(696, 55));
            IF_SETGRAPHIC(1934 as graphic, comp(696, 56));
            IF_SETTEXT("Feed a Key", comp(696, 57));
        } else {
            IF_SETGRAPHIC(1945 as graphic, comp(696, 54));
            IF_SETGRAPHIC(1947 as graphic, comp(696, 55));
            IF_SETGRAPHIC(1946 as graphic, comp(696, 56));
            if ((script6950() == 0)) {
                IF_SETTEXT("No Keys", comp(696, 57));
            } else {
                IF_SETTEXT("Full", comp(696, 57));
            };
        };
    } else {
        IF_SETGRAPHIC(1945 as graphic, comp(696, 54));
        IF_SETGRAPHIC(1947 as graphic, comp(696, 55));
        IF_SETGRAPHIC(1946 as graphic, comp(696, 56));
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