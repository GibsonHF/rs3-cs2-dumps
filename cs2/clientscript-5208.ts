//
function script5208(int0: struct): string {
    var int1 = struct_getparam(int0, 7660);
    var int2 = struct_getparam(int0, 7661);
    var string0 = "";
    if ((int1 > 0)) {
        string0 = `Restores negative stat changes in <col=00ffff>Attack, Constitution, Defense, Magic, Necromancy, Prayer, Ranged</col> and <col=00ffff>Strength</col> by <col=00ffff>${inttostring(int1, 10)}</col>`;
    };
    if ((int2 > 0)) {
        if ((int1 > 0)) {
            string0 = strconcat(string0, ` + <col=00ffff>${inttostring(int2, 10)}%</col> of total level`);
        } else {
            string0 = `Restores negative stat changes in <col=00ffff>Attack, Constitution, Defense, Magic, Necromancy, Prayer, Ranged</col> and <col=00ffff>Strength</col> by <col=00ffff>${inttostring(int2, 10)}%</col> of total level`;
        };
    };
    if (((int1 > 0) || (int2 > 0))) {
        string0 = strconcat(string0, ".");
    };
    return string0;
}