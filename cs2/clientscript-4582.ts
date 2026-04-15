//[proc,date_tostring]
function script4582(int0: int, int1: int, int2: int): string {
    if ((int0 > 0)) {
        if ((int1 > 0)) {
            if ((int2 > 0)) {
                return `${inttostring(int0, 10)} ${script4583(int0, "day", "days")}, ${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")} and ${inttostring(int2, 10)} ${script4583(int2, "minute", "minutes")}`;
            };
            return `${inttostring(int0, 10)} ${script4583(int0, "day", "days")} and ${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")}`;
        };
        if ((int2 > 0)) {
            return `${inttostring(int0, 10)} ${script4583(int0, "day", "days")} and ${inttostring(int2, 10)} ${script4583(int2, "minute", "minutes")}`;
        };
        return `${inttostring(int0, 10)} ${script4583(int0, "day", "days")}`;
    };
    if ((int1 > 0)) {
        if ((int2 > 0)) {
            return `${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")} and ${inttostring(int2, 10)} ${script4583(int2, "minute", "minutes")}`;
        };
        return `${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")}`;
    };
    if ((int2 > 0)) {
        return `${inttostring(int2, 10)} ${script4583(int2, "minute", "minutes")}`;
    };
    return "";
}