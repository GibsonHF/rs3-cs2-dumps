//
function script14844(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int5 != -1)) {
        if ((int0 != comp(-1, 65535))) {
            IF_SETGRAPHIC(dbrow_getfield(int5, 385152, 0), int0);
        };
        if (((int1 != comp(-1, 65535)) && (int2 != comp(-1, 65535)))) {
            IF_SETHIDE(false, int1);
            IF_SETHIDE(false, int2);
            IF_SETTEXT(TOSTRING_LOCALISED(script14612(int5), 1), int2);
        };
        if ((int3 != comp(-1, 65535))) {
            IF_SETTEXT(dbrow_getfield(int5, 385040, 0), int3);
        };
        if ((int4 != -1)) {
            IF_SETTEXT(script14610(int5), int4);
        };
    } else {
        if ((int0 != comp(-1, 65535))) {
            IF_SETGRAPHIC(-1 as graphic, int0);
        };
        if ((int1 != comp(-1, 65535))) {
            IF_SETHIDE(true, int1);
        };
        if ((int2 != comp(-1, 65535))) {
            IF_SETHIDE(true, int1);
        };
        if ((int3 != comp(-1, 65535))) {
            IF_SETTEXT("No Relic Power", int3);
        };
        if ((int4 != -1)) {
            IF_SETTEXT("", int4);
        };
    };
    return;
}