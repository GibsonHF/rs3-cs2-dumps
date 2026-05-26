//[proc,clan_keyword_construct]
function script4586(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1 as cs2enum;
    if (((int2 > 0) && (int3 > 0))) {
        int4 = enum_getvalue(0, 26, 3703 as cs2enum, int2);
        if ((int4 != -1 as cs2enum)) {
            IF_SETTEXT(enum_getvalue(0, 36, int4, int3), int0);
            IF_SETHIDE(0, int1);
            return;
        };
    };
    IF_SETTEXT("No keyword selected", int0);
    IF_SETHIDE(1, int1);
    return;
}