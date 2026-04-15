//[proc,clan_keyword_construct]
function script4586(int0: component, int1: component, int2: int, int3: int): void {
    var int4 = -1 as cs2enum;
    if (((int2 > 0) && (int3 > 0))) {
        int4 = enum_getvalue(0, 26, 3703 as cs2enum, int2);
        if ((int4 != -1 as cs2enum)) {
            IF_SETTEXT(enum_getvalue(0, 36, int4, int3), int0);
            IF_SETHIDE(false, int1);
            return;
        };
    };
    IF_SETTEXT("No keyword selected", int0);
    IF_SETHIDE(true, int1);
    return;
}