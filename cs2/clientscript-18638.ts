//
function script18638(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 25;
    var int3 = 10;
    if ((varbitplayer_30982 > 0)) {
        int2 = (int2 + SCALE(int2, 100, (10 + (varbitplayer_30982 * 3))));
        int3 = (int3 + SCALE(int3, 100, (10 + (varbitplayer_30982 * 3))));
    };
    switch (int0) {
        case 44244: {
            var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit every <col=ffffff>${script15973(2, 1)}</col>.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring(8, 10)}</col> hits.`;
            string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
            string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(4, 10)}%</col> of the damage dealt.`;
            if ((script15411(52788 as struct) == 1)) {
                string0 = `${string0}<br>- Can be <col=ffffff>recast</col> within <col=ffffff>${script14945(40, 1)}</col> of the previous cast.`;
                string0 = `${string0}<br><br><col=ffffff>Second Cast:</col> ${struct_getparam(52788, 2795)}`;
            };
            if ((script15411(52789 as struct) == 1)) {
                string0 = `${string0}<br><col=ffffff>Third Cast:</col> ${struct_getparam(52789, 2795)}`;
            };
            break;
        }
        case 52788: {
            string0 = `${string0}<br>- ${script17720(int0, 80, (80 + 20), 0, int1)} per hit every <col=ffffff>${script15973(3, 1)}</col>.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring(6, 10)}</col> hits.`;
            string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
            string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(6, 10)}%</col> of the damage dealt.`;
            if ((script15411(52789 as struct) == 1)) {
                string0 = `${string0}<br><br><col=ffffff>Third Cast:</col> ${struct_getparam(52789, 2795)}`;
            };
            break;
        }
        case 52789: {
            string0 = `${string0}<br>- ${script17720(int0, 110, (110 + 20), 0, int1)} on first hit.`;
            string0 = `${string0}<br>- ${script17718(int0, 100, 0, int1)} per hit every <col=ffffff>${script15973(4, 1)}</col>.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring((6 + 1), 10)}</col> hits.`;
            string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
            string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(12, 10)}%</col> of the damage dealt.`;
            break;
        }
    };
    return string0;
}