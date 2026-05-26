//
function script6325(): void {
    var string0 = "<col=c8c8c8>";
    var int0 = 11504 as graphic;
    if ((varclient_1936 == 2)) {
        script6326(1, 85458950, 85458951);
        script6326(0, 85458953, 85458954);
        script6326(0, 85458956, 85458957);
        int0 = 11505 as graphic;
    } else if ((varclient_1936 == 1)) {
        script6326(0, 85458950, 85458951);
        script6326(1, 85458953, 85458954);
        script6326(0, 85458956, 85458957);
    } else {
        script6326(0, 85458950, 85458951);
        script6326(0, 85458953, 85458954);
        script6326(1, 85458956, 85458957);
        string0 = "<col=787878>";
    };
    IF_SETGRAPHIC(int0, comp(1304, 4));
    if ((varclient_1935 > 0)) {
        IF_SETTEXT(`${string0}${inttostring(MIN(varclient_1935, 999999999), 10)}</col>`, comp(1304, 3));
    } else {
        IF_SETTEXT(`${string0}None</col>`, comp(1304, 3));
    };
    return;
}