//
function script18725(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 200, (200 + 40), 0, int1)} to up to ${script18561(8)} within ${script17709(1)} of the target.`;
    string0 = `${string0}<br>- Reduces the <col=ffffff>Attack Rate</col> of enemies hit by <col=ffffff>${inttostring(1, 10)}</col> for <col=ffffff>${script15973(25, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>PvP:</col> Reduces the <sprite=14907><nbsp><col=DEAC18>Adrenaline</col> gain of all enemies hit by <col=ffffff>${inttostring(50, 10)}%</col> for <col=ffffff>${script15973(25, 1)}</col>.`;
    return string0;
}