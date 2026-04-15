//
function script18692(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 25;
    var int3 = 6;
    var int4 = 200;
    var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit every <col=ffffff>${script15973(2, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(5, 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
    string0 = `${string0}<br>- Deals ${script17717(int4)} if the target moves.`;
    return string0;
}