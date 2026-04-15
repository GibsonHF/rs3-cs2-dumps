//
function script2084(): void {
    if ((varclient_640 > 0)) {
        IF_SETTEXT(`${inttostring(varclient_640, 10)}%`, comp(836, 15));
    } else {
        IF_SETTEXT("---", comp(836, 15));
    };
    return;
}