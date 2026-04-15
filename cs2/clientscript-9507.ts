//
function script9507(int0: int): string {
    if ((int0 <= 1)) {
        return "1 minute";
    };
    var int1 = (int0 / 60);
    var int0 = MODULO(int0, 60);
    if ((int1 > 0)) {
        return `${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")} and ${inttostring(int0, 10)} ${script4583(int0, "minute", "minutes")}`;
    };
    return `${inttostring(int0, 10)} minutes`;
}