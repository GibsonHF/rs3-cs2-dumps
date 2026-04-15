//
function script19663(int0: obj): int {
    if ((item_getparam(int0, 6296) == 1)) {
        return script19664(31, 0);
    };
    var int1 = item_getparam(int0, 277);
    if ((int1 == -1 as stat)) {
        script12478(`${script6686(int0)} does not have skillcape_skill set.`);
        return 0;
    };
    var int2 = enum_getvalue(17, 0, 1482 as cs2enum, int1);
    if ((item_getparam(int0, 4244) == 1)) {
        return script19664(int2, 1);
    };
    return script19664(int2, 0);
}