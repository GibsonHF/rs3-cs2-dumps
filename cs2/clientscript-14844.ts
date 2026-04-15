//
function script14844(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: dbrow): void {
    if ((int5 != -1 as dbrow)) {
        if ((int0 != -1)) {
            stack(dbrow_getfield(int5, 385152, 0));
            stack(int0);
            IF_SETGRAPHIC();
        };
        if (((int1 != comp(-1, 65535)) && (int2 != comp(-1, 65535)))) {
            IF_SETHIDE(false, int1);
            IF_SETHIDE(false, int2);
            IF_SETTEXT(TOSTRING_LOCALISED(script14612(int5), 1), int2);
        };
        if ((int3 != comp(-1, 65535))) {
            IF_SETTEXT(dbrow_getfield(int5, 385040, 0), int3);
        };
        if ((int4 != comp(-1, 65535))) {
            IF_SETTEXT(script14610(int5), int4);
        };
    } else {
        if ((int0 != -1)) {
            stack(-1);
            stack(int0);
            IF_SETGRAPHIC();
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
        if ((int4 != comp(-1, 65535))) {
            IF_SETTEXT("", int4);
        };
    };
    return;
}