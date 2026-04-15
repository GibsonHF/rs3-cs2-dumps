//
function script17651(int0: cs2enum, int1: int): void {
    var string0 = enum_getvalue(0, 36, int0, int1);
    if ((STRING_LENGTH(string0) > 0)) {
        CC_RADIOGROUP_SETOPTIONSELECTED(int1, 1, 0);
    };
    return;
}