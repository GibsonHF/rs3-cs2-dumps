//
function script10980(int0: int): graphic {
    var int1 = enum_getvalue(0, 23, 16736 as cs2enum, int0);
    if ((int1 == -1 as graphic)) {
        script12478(`Unsupported multiplier: ${inttostring(int0, 10)}.`);
    };
    return int1;
}