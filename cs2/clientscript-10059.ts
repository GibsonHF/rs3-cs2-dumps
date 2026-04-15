//
function script10059(int0: unknown_int, string0: string, string1: string, string2: string): void {
    if ((strcmp(string1, "") != 0)) {
        var string0 = `${string0} - ${string1}`;
    };
    if ((strcmp(string2, "") != 0)) {
        string0 = `${string0}<br>${string2}`;
    };
    IF_SETONMOUSEREPEAT(callback(script10070, string0, 400, -2147483645, -1), int0);
    return;
}