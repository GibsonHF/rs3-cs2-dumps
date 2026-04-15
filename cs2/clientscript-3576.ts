//
function script3576(int0: unknown_int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int3, int1, int2] = script3575(int0);
    var string0 = "";
    if ((int3 > 0)) {
        string0 = `${inttostring(int3, 10)} ${script4583(int3, "day", "days")} : `;
    };
    string0 = `${string0}${inttostring(int1, 10)} hrs : `;
    string0 = `${string0}${inttostring(int2, 10)} mins`;
    return string0;
}