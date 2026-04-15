//
function script18705(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 170, (170 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- Heals you for <col=ffffff>${inttostring(60, 10)}%</col> of the damage dealt over <col=ffffff>${script15973((5 * 5), 1)}</col>.`;
    string0 = `${string0}<br>- Deals an additional ${script17720(49542 as struct, 55, (55 + 10), 0, int1)} if you are using <col=ffffff>${OC_NAME(19157 as obj)}</col>.`;
    return string0;
}