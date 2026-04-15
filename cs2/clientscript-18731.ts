//
function script18731(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 180, (180 + 40), 0, int1)} on first hit.`;
    string0 = `${string0}<br>- ${script17720(int0, 90, (90 + 20), 0, int1)} on second hit.`;
    string0 = `${string0}<br>- ${script17720(int0, 45, (45 + 10), 0, int1)} on third and fourth hits.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(4, 10)}</col> hits.`;
    return string0;
}