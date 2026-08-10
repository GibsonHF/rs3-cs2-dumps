//
function script17730(int0: number, int1: number, string0: string): string {
    var int2 = 4;
    var int3 = 6;
    var int4 = INV_GETOBJ(94 as inv, 3);
    if (((int4 != -1 as obj) && (item_getparam(int4, 8898) == 1))) {
        int3 = MAX(int3, item_getparam(int4, 13));
    };
    if ((script9681(7) == 1)) {
        int2 = (int2 + 2);
    };
    var string0 = `${string0}<br>- ${script17720(48314, 225, (225 + 50), 0, int1)} per hit.`;
    string0 = `${string0}<br>- Bounces between enemies within ${script17709(int3)} of each other up to <col=ffffff>${inttostring(int2, 10)}</col> times (disabled in <col=ffffff>PvP</col>).`;
    return string0;
}