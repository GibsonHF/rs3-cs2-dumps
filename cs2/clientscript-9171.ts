//
function script9171(int0: int, int1: unknown_int): string {
    if (((int1 == 1) && (int0 > 1440))) {
        if (((int0 / 1440) == 1)) {
            return "1 day";
        };
        return `${inttostring((int0 / 1440), 10)} days`;
    };
    var string0 = "";
    var string1 = "";
    if (((int0 / 60) < 10)) {
        string1 = `0${inttostring((int0 / 60), 10)}`;
    } else {
        string1 = inttostring((int0 / 60), 10);
    };
    if ((MODULO(int0, 60) < 10)) {
        string0 = `0${inttostring(MODULO(int0, 60), 10)}`;
    } else {
        string0 = inttostring(MODULO(int0, 60), 10);
    };
    return `${string1}:${string0}`;
}