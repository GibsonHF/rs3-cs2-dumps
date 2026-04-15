//
function script18592(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- Creates a ${script18554(1)} at your location.`;
    string0 = `${string0}<br>- Heals anyone within ${script17709(7)} of the area for <col=ffffff>0%-${inttostring(7, 10)}%</col> of their <sprite=18851><nbsp><col=ED705A>Maximum<nbsp>Life<nbsp>Points</col> every <col=ffffff>${script14945(6, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${TOSTRING_LOCALISED(SCALE(300, 100, script2916()), 1)}</col> (<col=ffffff>${inttostring(300, 10)}%</col> <sprite=18851><nbsp><col=ED705A>Maximum<nbsp>Life<nbsp>Points</col>) heal capacity.`;
    string0 = `${string0}<br>- ${script17710(36)}.`;
    return string0;
}