//
function script18735(int0: unknown_int, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- <col=FFA11A>Melee attacks</col> deal ${script17717(120)}.`;
    string0 = `${string0}<br>- Your <col=ffffff>Hit Chance</col> is decreased by <col=ffffff>${inttostring(10, 10)}%</col>.`;
    string0 = `${string0}<br>- Reduces all non-strength combat stats by <col=ffffff>${inttostring(10, 10)}%</col>.`;
    string0 = `${string0}<br>- Increases your ${script18576(2, 1, 1)} by <col=ffffff>${inttostring(25, 10)}%</col> of the reduced levels.`;
    string0 = `${string0}<br>- ${script17710(100)}.`;
    return string0;
}