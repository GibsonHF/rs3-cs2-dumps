//
function script18629(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- Move up to ${script17709(10)} towards the target.`;
    string0 = `${string0}<br>- ${script17720(int0, 75, (75 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- Clears <col=ffffff>Bound</col> debuff.`;
    string0 = `${string0}<br>- ${script17725(11)}.`;
    if ((int0 == 40935 as struct)) {
        string0 = `${string0}<br>- Deals an additional ${script17720(int0, 5, (5 + 2), 0, int1)} for every <col=ffffff>${script15973(1, 1)}</col> since your last attack.`;
        string0 = `${string0}<br>- After <col=ffffff>${script15973(8, 1)}</col> since your last attack, your next <col=ffffff>Channelled ability</col> cast within <col=ffffff>${script15973(10, 1)}</col> is dealt as <col=ffffff>Damage over time</col>.`;
    };
    if ((script7495() == 1)) {
        string0 = `${string0}<br>- ${script15734(1)}`;
    };
    return string0;
}