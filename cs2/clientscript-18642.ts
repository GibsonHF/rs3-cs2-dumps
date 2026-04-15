//
function script18642(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, SCALE(50, 100, 200), (SCALE(50, 100, 200) + SCALE(10, 100, 200)), 0, int1)} on first hit.`;
    string0 = `${string0}<br>- ${script17720(int0, 50, (50 + 10), 0, int1)} per hit every <col=ffffff>${script15973(2, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(27, 10)}%</col> of the damage dealt after the first hit is dealt to self.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(5, 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
    return string0;
}