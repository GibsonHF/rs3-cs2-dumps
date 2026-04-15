//
function script18647(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 110, (110 + 20), 0, int1)}.`;
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(1)}`;
    };
    string0 = `${string0}<br>- Deals ${script17717(250)} if the target's <sprite=18851><nbsp><col=ED705A>Life<nbsp>Points</col> are below <col=ffffff>${TOSTRING_LOCALISED(50, 1)}%</col>.`;
    return string0;
}