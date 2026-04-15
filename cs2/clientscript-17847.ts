//
function script17847(int0: struct, int1: int): unknown_int {
    var int2 = struct_getparam(int0, 4166);
    if ((int2 == -1)) {
        return 0;
    };
    var int3 = script17846(int0);
    if ((int3 == -1)) {
        return 0;
    };
    if ((int3 >= int2)) {
        script1296("You have reached your daily purchase cap for this item.");
        return 1;
    };
    if ((int1 > (int2 - int3))) {
        script1296(`The amount you are trying to purchase exceeds your daily cap. You can only purchase ${TOSTRING_LOCALISED((int2 - int3), 1)} more of this item today.`);
        return 1;
    };
    return 0;
}