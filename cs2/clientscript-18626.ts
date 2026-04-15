//
function script18626(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- Charge ${script17720(int0, 45, (45 + 10), 0, int1)} every <col=ffffff>${script15973(1, 1)}</col>.`;
    string0 = `${string0}<br>- Maximum <col=ffffff>${inttostring(5, 10)}</col> charges over <col=ffffff>${script15973((5 * 1), 1)}</col>.`;
    string0 = `${string0}<br>- Recast to damage the target and up to ${script18561(9)} within ${script17709(1)} of the target.`;
    string0 = `${string0}<br>- <col=ffffff>Fully Charged:</col> Instead hit up to ${script18561(25)} within ${script17709(2)} of the target.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    return string0;
}