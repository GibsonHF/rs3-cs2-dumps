//
function script18712(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 100, (100 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- Damage is increased by <col=ffffff>${inttostring(2, 10)}%-${inttostring(200, 10)}%</col> based on the target's ${script18576(6, 1, 1)}.`;
    string0 = `${string0}<br>- ${script18584(5, 0)}.`;
    return string0;
}