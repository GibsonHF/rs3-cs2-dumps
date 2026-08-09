//
function script17406(int0: number, int1: number, int2: number, int3: number, int4: number, long0: bigint, long1: bigint): void {
    script17407(int0, long0);
    script17407(int1, long1);
    var string0 = "<col=ff0000>Unknown</col>";
    var long2 = 0n;
    if (LONG_BRANCH_EQUALS(long0, 9223372036854775807n)) {
        if (LONG_BRANCH_EQUALS(long1, 9223372036854775807n)) {
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(true, int3);
        } else {
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            IF_SETGRAPHIC(0 as graphic, int3);
            IF_SETPOSITION(script4106(string0, int4), 0, 0, 1, int3);
        };
    } else if (LONG_BRANCH_EQUALS(long1, 9223372036854775807n)) {
        string0 = "Unknown";
        IF_SETTEXT(string0, int2);
        IF_SETHIDE(false, int3);
        IF_SETGRAPHIC(1 as graphic, int3);
        IF_SETPOSITION(script4106(string0, int4), 0, 2, 1, int3);
    } else {
        long2 = SUB_LONG(long0, long1);
        if (LONG_BRANCH_GREATER_THAN(long2, 0n)) {
            if (LONG_BRANCH_EQUALS(long2, 1n)) {
                string0 = "<col=FA3232>1 coin</col>";
            } else {
                string0 = `<col=FA3232>${TOSTRING_LOCALISED_LONG(long2, 1)} coins</col>`;
            };
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            IF_SETGRAPHIC(0 as graphic, int3);
            IF_SETPOSITION(script4106(string0, int4), 0, 0, 1, int3);
        } else if (LONG_BRANCH_LESS_THAN(long2, 0n)) {
            long2 = SUB_LONG(0n, long2);
            if (LONG_BRANCH_EQUALS(long2, 1n)) {
                string0 = "1 coin";
            } else {
                string0 = `<col=32FA32>${TOSTRING_LOCALISED_LONG(long2, 1)} coins</col>`;
            };
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(false, int3);
            IF_SETGRAPHIC(1 as graphic, int3);
            IF_SETPOSITION(script4106(string0, int4), 0, 2, 1, int3);
        } else {
            string0 = "No net transfer";
            IF_SETTEXT(string0, int2);
            IF_SETHIDE(true, int3);
        };
    };
    return;
}