//
function script17963(int0: int): int {
    var int1 = enum_getvalue(0, 0, 17024 as cs2enum, int0);
    if ((int1 == -1)) {
        script12478(`Unexpected Value for Tab ID in the mobile shop. Got ${inttostring(int0, 10)}.`);
    };
    return int1;
}