//
function script18648(int0: struct, int1: unknown_int, string0: string): string {
    switch (int0) {
        case 14701: {
            var string0 = `${string0}<br>- ${script17720(int0, 110, (110 + 20), 0, int1)}.`;
            string0 = `${string0}<br>- Increases the <col=ffffff>Critical Strike Chance</col> of your next <col=FFA11A>Melee attack</col> by <col=ffffff>${inttostring(25, 10)}%</col>.`;
            break;
        }
        case 40941: {
            string0 = `${string0}<br>- ${script17720(int0, 120, (120 + 20), 0, int1)}.`;
            string0 = `${string0}<br>- Your next <col=FFA11A>Melee attack</col> within <col=ffffff>${script15973(25, 1)}</col> is guaranteed to <col=ffffff>Critically Strike</col>.`;
            break;
        }
    };
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(1)}`;
    };
    return string0;
}