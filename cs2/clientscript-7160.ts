//
function script7160(): void {
    var int0 = -1 as npc;
    var int1 = -1 as seq;
    if (((IF_GETMODEL(63569926) != -1 as model) && (RANDOM(2) > 0))) {
        return;
    };
    int0 = enum_getvalue(0, 32, 8348 as cs2enum, RANDOM(ENUM_GETOUTPUTCOUNT(8348 as cs2enum)));
    int1 = enum_getvalue(0, 6, 8349 as cs2enum, RANDOM(ENUM_GETOUTPUTCOUNT(8349 as cs2enum)));
    IF_SETNPCMODEL(int0, comp(970, 6));
    IF_SETMODELANIM(int1, comp(970, 6));
    IF_SETMODELANGLE(5, 0, 0, 75, 0, 575, comp(970, 6));
    var string0 = enum_getvalue(32, 36, 8347 as cs2enum, int0);
    IF_SETTEXT(string0, comp(970, 5));
    return;
}