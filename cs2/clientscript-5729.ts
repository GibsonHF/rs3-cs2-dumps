//
function script5729(int0: int, int1: int, int2: int, int3: boolean, int4: boolean): string {
    var string0 = "";
    if ((int0 != -1)) {
        if ((int0 < 10)) {
            string0 = `${TEXT_SWITCH(int3, "0", "")}${inttostring(int0, 10)}${TEXT_SWITCH(int4, " : ", ":")}`;
        } else {
            string0 = `${inttostring(int0, 10)}${TEXT_SWITCH(int4, " : ", ":")}`;
        };
    };
    if ((int1 < 10)) {
        string0 = `${string0}0${inttostring(int1, 10)}${TEXT_SWITCH(int4, " : ", ":")}`;
    } else {
        string0 = `${string0}${inttostring(int1, 10)}${TEXT_SWITCH(int4, " : ", ":")}`;
    };
    if ((int2 < 10)) {
        string0 = `${string0}0${inttostring(int2, 10)}`;
    } else {
        string0 = `${string0}${inttostring(int2, 10)}`;
    };
    return string0;
}