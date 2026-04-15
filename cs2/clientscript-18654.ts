//
function script18654(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- <col=FFA11A>Melee attacks</col> deal ${script17717(175)}.`;
    string0 = `${string0}<br>- Increases damage taken by <col=ffffff>${inttostring(25, 10)}%</col>.`;
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(4)}`;
        string0 = `${string0}<br>- Basic attacks and basic abilities generate ${script18562(200)} <sprite=23875><nbsp><col=ffffff>${struct_getparam(52791, 2794)}</col> stack.`;
        string0 = `${string0}<br>- Maximum number of <sprite=23875><nbsp><col=ffffff>${struct_getparam(52791, 2794)}</col> stacks are increased by <col=ffffff>4</col>. `;
    };
    string0 = `${string0}<br>- <sprite=14216><nbsp><col=ffffff>${struct_getparam(14686, 2794)}:</col> ${script17711(15, true)}.`;
    string0 = `${string0}<br>- ${script17710(33)}.`;
    return string0;
}