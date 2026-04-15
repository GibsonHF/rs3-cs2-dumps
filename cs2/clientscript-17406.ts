//
function script17406(int0: component, int1: component, int2: component, int3: component, int4: unknown_int, long0: long, long1: long): void {
    script17407(int0, long0);
    script17407(int1, long1);
    var string0 = "<col=ff0000>Unknown</col>";
    var long2 = 0n;
    if (branch_eq_long[14](long0, 9223372036854775807n)) {
        if (branch_eq_long[18](long1, 9223372036854775807n)) {
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(true, int3);
        } else {
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            stack(0);
            stack(int3);
            IF_SETGRAPHIC();
            IF_SETPOSITION(script4106(string0, int4), 0, 0, 1, int3);
        };
    } else if (branch_eq_long[47](long1, 9223372036854775807n)) {
        string0 = "Unknown";
        IF_SETTEXT(string0, int2);
        IF_SETHIDE(false, int3);
        stack(1);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETPOSITION(script4106(string0, int4), 0, 2, 1, int3);
    } else {
        long2 = SUB_LONG(long0, long1);
        if (branch_gt_long[75](long2, 0n)) {
            if (branch_eq_long[79](long2, 1n)) {
                string0 = "<col=FA3232>1 coin</col>";
            } else {
                string0 = `<col=FA3232>${TOSTRING_LOCALISED_LONG(long2, 1)} coins</col>`;
            };
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            stack(0);
            stack(int3);
            IF_SETGRAPHIC();
            IF_SETPOSITION(script4106(string0, int4), 0, 0, 1, int3);
        } else if (branch_lt_long[111](long2, 0n)) {
            long2 = SUB_LONG(0n, long2);
            if (branch_eq_long[119](long2, 1n)) {
                string0 = "1 coin";
            } else {
                string0 = `<col=32FA32>${TOSTRING_LOCALISED_LONG(long2, 1)} coins</col>`;
            };
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            stack(1);
            stack(int3);
            IF_SETGRAPHIC();
            IF_SETPOSITION(script4106(string0, int4), 0, 2, 1, int3);
        } else {
            string0 = "No net transfer";
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(true, int3);
        };
    };
    return;
}