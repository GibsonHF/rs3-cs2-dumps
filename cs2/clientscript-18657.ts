//
function script18657(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 100, (100 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- Your next <col=FFA11A>Melee ability</col> within <col=ffffff>${script15973(12, 1)}</col> deals ${script18562(175)} (<col=ffffff>PvP:</col> ${script18562(125)}) base damage.`;
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(1)}`;
    };
    return string0;
}