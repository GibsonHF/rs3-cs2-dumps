//
function script3594(int0: component): void {
    var int1 = script13431(6);
    var int2 = script13432(6);
    var int3 = 0;
    if (((int2 + 1) < ENUM_GETOUTPUTCOUNT(15779 as cs2enum))) {
        int3 = enum_getvalue(0, 0, 15779 as cs2enum, (int2 + 1));
    } else {
        int3 = enum_getvalue(0, 0, 15779 as cs2enum, int2);
    };
    script8800(`${TOSTRING_LOCALISED((int1 / 10), 1)}/${TOSTRING_LOCALISED((int3 / 10), 1)}`, int0, -1);
    return;
}