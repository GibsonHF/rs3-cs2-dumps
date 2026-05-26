//
function script14862(int0: number, int1: number, int2: number): void {
    var int3 = enum_getvalue(0, 74, 14090 as cs2enum, int2);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    var int4 = script19772(varplayer_12086, int1);
    switch (int0) {
        case 1: {
            IF_SETTEXT(`Harnessing relic power: ${dbrow_getfield(int3, 385040, 0)}.`, 45285516);
            if ((int1 == 0)) {
                IF_SETTEXT("Select a relic slot to harness this power into.", 45285532);
            } else {
                IF_SETTEXT(`Chronote cost: ${TOSTRING_LOCALISED(script14611(int3), 1)}<br>Monolith energy: ${TOSTRING_LOCALISED(script14612(int3), 1)}<br>Are you sure you wish to continue?`, 45285532);
                if ((int4 != -1 as dbrow)) {
                    IF_SETTEXT(`${IF_GETTEXT(45285516)}<br>Unharnessing relic power: ${dbrow_getfield(int4, 385040, 0)}.`, 45285516);
                };
            };
            break;
        }
        case 2: {
            IF_SETTEXT(`Unharnessing relic power: ${dbrow_getfield(int3, 385040, 0)}.`, 45285516);
            IF_SETTEXT(`Harnessing this relic power again will require the following:<br>Chronote cost: ${TOSTRING_LOCALISED(script14611(int3), 1)}<br>Monolith energy: ${TOSTRING_LOCALISED(script14612(int3), 1)}<br>Are you sure you wish to continue?`, 45285532);
            break;
        }
    };
    return;
}