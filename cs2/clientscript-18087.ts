//
function script18087(int0: int, int1: unknown_int, int2: unknown_int): string {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    [int3, int4, int5] = script3985(int0, int1);
    var string1 = `${inttostring(int3, 10)} ${script4583(int3, "Day", "Days")}`;
    var string2 = `${inttostring(int4, 10)} ${script4583(int4, "Hour", "Hours")}`;
    var string3 = `${inttostring(int5, 10)} ${script4583(int5, "Minute", "Minutes")}`;
    if ((int2 == 1)) {
        if ((int3 >= 1)) {
            string0 = strconcat(string1, `<br>${string2}`);
        } else if ((int4 >= 1)) {
            string0 = strconcat(string2, `<br>${string3}`);
        } else {
            string0 = string3;
        };
    } else if ((int3 >= 1)) {
        string0 = strconcat(string1, ` ${string2}`);
    } else if ((int4 >= 1)) {
        string0 = strconcat(string2, ` ${string3}`);
    } else {
        string0 = string3;
    };
    return string0;
}