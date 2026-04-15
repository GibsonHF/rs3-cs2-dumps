//
function script2677(int0: int, int1: int, int2: int): string {
    var string0 = "";
    if ((int0 > 0)) {
        string0 = `${string0}${inttostring(int0, 10)} ${script4583(int0, "month", "months")}`;
    };
    if ((int1 > 0)) {
        if ((int0 > 0)) {
            if ((int2 > 0)) {
                string0 = `${string0}, `;
            } else {
                string0 = `${string0} & `;
            };
        };
        string0 = `${string0}${inttostring(int1, 10)} ${script4583(int1, "week", "weeks")}`;
    };
    if ((int2 > 0)) {
        if (((int0 > 0) || (int1 > 0))) {
            string0 = `${string0}& `;
        };
        string0 = `${string0}${inttostring(int2, 10)} ${script4583(int2, "day", "days")}`;
    };
    return string0;
}