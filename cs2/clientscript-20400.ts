//
function script20400(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 80, (80 + 20), 0, int1)} on first and second hit.`;
    string0 = `${string0}<br>- <col=ffffff>+${inttostring((250 / 10), 10)}%</col> Increased <col=ffffff>Critical Strike Chance</col> & <col=ffffff>Critical Strike Damage</col> on the first and second hits.`;
    string0 = `${string0}<br>- ${script17720(int0, 150, (150 + 30), 0, int1)} on third hit.`;
    string0 = `${string0}<br>- <col=ffffff>+${inttostring((500 / 10), 10)}%</col> Increased <col=ffffff>Critical Strike Chance</col> & <col=ffffff>Critical Strike Damage</col> on the third hit.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(3, 10)}</col> hits.`;
    return string0;
}