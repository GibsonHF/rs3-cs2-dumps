//
function script7099(int0: component, int1: int, int2: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var string0 = "";
    if ((CLIENTCLOCK() >= int2)) {
        if ((varclient_2229 > 0)) {
            string0 = `${inttostring(MAX(1, int1), 10)}s`;
        } else {
            string0 = "Done";
        };
        IF_SETTEXT(string0, int0);
        if ((int1 > 0)) {
            IF_SETONTIMER(callback(script7099, 81985546, (int1 - 1), (CLIENTCLOCK() + 50)), 81985547);
        } else {
            IF_SETONTIMER(callback(), comp(1251, 11));
        };
    };
    return;
}