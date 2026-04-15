//
function script16868(int0: int): string {
    var int1 = (int0 - script12477());
    if (((script16825() != 1) || (int1 < 0))) {
        return "00:00:00";
    };
    var string0 = "";
    var int2 = 0;
    if (((int1 > 7) || ((int1 == 7) && (script16847(script12477()) == 1)))) {
        if (((int1 / 7) > 0)) {
            string0 = strconcat(string0, script4583((int1 / 7), "1 week, ", `${inttostring((int1 / 7), 10)} weeks, `));
        };
        string0 = strconcat(string0, script985(MODULO(int1, 7), "0 days", "1 day", `${inttostring(MODULO(int1, 7), 10)} days`));
        return string0;
    };
    int2 = script16848(int0);
    return script15908((int2 / 1440), -1, -1, ((int2 - ((int2 / 1440) * 1440)) / 60), MODULO(int2, 60), -1, -1, 5, -1, 0, 1, 1, 0, 0, 1);
}