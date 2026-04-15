//
function script18613(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 125, (125 + 30), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(2, 10)}</col> hits.`;
    string0 = `${string0}<br>- Each hit has <col=ffffff>+${inttostring((100 / 10), 10)}% Critical Strike Chance</col> and <col=ffffff>+${inttostring((200 / 10), 10)}% Critical Strike Damage</col>.`;
    return string0;
}