//
function script9122(int0: int, int1: obj, int2: int, int3: int, int4: int, int5: int, int6: unknown_int, int7: int, int8: int, int9: int, int10: int, int11: int, string0: string): void {
    varbitplayer_4323 = int0;
    varclient_1790 = int7;
    varclient_4080 = int8;
    varclient_4079 = int9;
    varclient_1781 = int0;
    varclient_4077 = int4;
    varbitplayer_4321 = int10;
    varbitplayer_25803 = int11;
    if ((varbitplayer_4323 <= 0)) {
        IF_SETHIDE(true, comp(1253, 265));
        return;
    };
    IF_SETHIDE(false, comp(1253, 273));
    if ((varclient_1790 == 7)) {
        script1646();
        return;
    };
    var string1 = `<col=FFCD37>${OC_NAME(int1)}`;
    var string2 = "<col=FF0000>";
    switch (script16161()) {
        case 34949:
        case 46120: {
            string2 = script16595(int3);
            break;
        }
    };
    if ((int3 > 1)) {
        string1 = `${string2}${inttostring(int3, 10)}</col>x ${string1}`;
    };
    script16706(comp(1253, 274), int1, int2, int3, int4, int5);
    script14943(comp(1253, 271), string1, string0, OC_MEMBERS(int1), int5);
    script6671(int1, int2);
    script9719(int1, int2);
    script9720(int1, int2);
    script6672(int1, int2);
    if ((varclient_4083 == 2)) {
        script6566();
    } else {
        script6574(1);
    };
    return;
}