//
function script9385(int0: number): void {
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 0: {
            string0 = struct_getparam(25053, 3981);
            string1 = `Effect: ${struct_getparam(25053, 3982)}<br><br>Max cost to build: ${struct_getparam(25053, 3984)}<br><br>Base duration: ${struct_getparam(25053, 3986)}`;
            break;
        }
        case 1: {
            string0 = struct_getparam(25047, 3981);
            string1 = `Effect: ${struct_getparam(25047, 3982)}<br><br>Max cost to build: ${struct_getparam(25047, 3984)}<br><br>Base duration: ${struct_getparam(25047, 3986)}`;
            break;
        }
        case 6: {
            string0 = struct_getparam(25050, 3981);
            string1 = `Effect: ${struct_getparam(25050, 3982)}<br><br>Max cost to build: ${struct_getparam(25050, 3984)}<br><br>Base duration: ${struct_getparam(25050, 3986)}`;
            break;
        }
        case 5: {
            string0 = struct_getparam(25049, 3981);
            string1 = `Effect: ${struct_getparam(25049, 3982)}<br><br>Max cost to build: ${struct_getparam(25049, 3984)}<br><br>Base duration: ${struct_getparam(25049, 3986)}`;
            break;
        }
    };
    IF_SETTEXT(string0, 46071839);
    IF_SETTEXTALIGN(0, 0, 0, 46071840);
    IF_SETTEXT(string1, 46071840);
    return;
}