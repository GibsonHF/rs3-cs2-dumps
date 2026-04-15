//[clientscript,trawler_time_left]
function script2441(): void {
    if ((varclient_820 < 2)) {
        IF_SETTEXT("Time Left: <col=FFFFFF>~1 Min", comp(15, 8));
    } else {
        IF_SETTEXT(`Time Left: <col=FFFFFF>${inttostring(varclient_820, 10)} Mins`, comp(15, 8));
    };
    return;
}