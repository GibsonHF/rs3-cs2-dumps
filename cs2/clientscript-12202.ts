//
function script12202(int0: dbrow, int1: int, string0: string): string {
    if ((int0 == -1 as dbrow)) {
        return string0;
    };
    if ((DB_GETFIELDCOUNT(int0, 32848) == 0)) {
        return string0;
    };
    var string1 = `<br><br>Active perk: <col=ffffff>${dbrow_getfield(int0, 32784, 0)}</col>`;
    if ((int1 >= 1)) {
        string1 = `${string1} (rank <col=ffffff>${inttostring(int1, 10)}</col>)`;
    };
    string1 = `${string1}<br>${dbrow_getfield(int0, 32848, 0)}`;
    return `${string0}${string1}`;
}