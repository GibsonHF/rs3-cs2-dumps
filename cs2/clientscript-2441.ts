//[clientscript,trawler_time_left]
function script2441(): void {
    if ((varclient_820 < 2)) {
        IF_SETTEXT("Time Left: <col=FFFFFF>~1 Min", 983048);
    } else {
        IF_SETTEXT(`Time Left: <col=FFFFFF>${inttostring(varclient_820, 10)} Mins`, 983048);
    };
    return;
}