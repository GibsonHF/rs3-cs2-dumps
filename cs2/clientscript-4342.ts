//[clientscript,clan_run_time]
function script4342(int0: int, int1: int, int2: int, int3: component, int4: component): void {
    var string0 = "";
    var string1 = "";
    if ((MODULO(CLIENTCLOCK(), 3000) == 0)) {
        if ((++int1 >= 60)) {
            var int1 = 0;
            if ((++int0 >= 24)) {
                var int0 = 0;
            };
        };
        if ((int0 < 10)) {
            string0 = `0${inttostring(int0, 10)}`;
        } else {
            string0 = inttostring(int0, 10);
        };
        if ((int1 < 10)) {
            string1 = `0${inttostring(int1, 10)}`;
        } else {
            string1 = inttostring(int1, 10);
        };
        IF_SETTEXT(`${string0}:${string1}`, int3);
        IF_SETONTIMER(callback(script4342, int0, int1, int2, int3, int4), int3);
        [string0, string1] = script4341(int2, int0, int1);
        IF_SETTEXT(`${string0}:${string1}`, int4);
    } else if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        if ((int0 < 10)) {
            string0 = `0${inttostring(int0, 10)}`;
        } else {
            string0 = inttostring(int0, 10);
        };
        if ((int1 < 10)) {
            string1 = `0${inttostring(int1, 10)}`;
        } else {
            string1 = inttostring(int1, 10);
        };
        if ((MODULO(CLIENTCLOCK(), 100) == 0)) {
            IF_SETTEXT(`${string0}:${string1}`, int3);
        } else {
            IF_SETTEXT(`${string0} ${string1}`, int3);
        };
        [string0, string1] = script4341(int2, int0, int1);
        if ((MODULO(CLIENTCLOCK(), 100) == 0)) {
            IF_SETTEXT(`${string0}:${string1}`, int4);
        } else {
            IF_SETTEXT(`${string0} ${string1}`, int4);
        };
    };
    return;
}