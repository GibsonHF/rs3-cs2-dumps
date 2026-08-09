//
function script18553(int0: number, int1: number): string {
    var string0 = "";
    if ((int0 != -1)) {
        string0 = `<col=ffffff>Invention perk:</col> ${dbrow_getfield(int0, 32784, 0)}`;
        if ((int1 >= 1)) {
            string0 = `${string0} (rank ${inttostring(int1, 10)})`;
        };
    };
    return string0;
}