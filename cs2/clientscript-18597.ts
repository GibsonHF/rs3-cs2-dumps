//
function script18597(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 100, (100 + 20), 0, int1)} per hit every <col=ffffff>${script15973(2, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring((25 + 1), 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Channeled</col>.`;
    string0 = `${string0}<br>- Deals an additional ${script17720(int0, 18, (18 + 4), 0, int1)} with each hit.`;
    string0 = `${string0}<br>- ${script18556(250)} per hit.`;
    string0 = `${string0}<br>- If you run out of <sprite=14907><nbsp><col=DEAC18>Adrenaline</col>, <col=ffffff>${inttostring(25, 10)}%</col> of the damage dealt will be dealt to self per hit.`;
    string0 = `${string0}<br>- After <col=ffffff>${inttostring(10, 10)}</col> hits, an additional <col=ffffff>${TOSTRING_LOCALISED(1000, 1)}</col> damage is dealt to self per hit.`;
    return string0;
}