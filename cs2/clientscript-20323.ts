//
function script20323(int0: component, int1: component): void {
    if (((int1 != comp(1479, 19)) && (varplayer_12329 < 8))) {
        switch (varplayer_12329) {
            case 5:
            case 8: {
                varplayer_12329 = (varplayer_12329 + 1);
                IF_SETONRESIZE(callback(script20285), comp(1361, 5));
                IF_CALLONRESIZE(89194501);
                return;
            }
        };
    };
    IF_SETSCROLLPOS(0, 0, int0);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    if ((int1 == comp(1479, 19))) {
        if ((STRING_LENGTH(varclient_8333) > 0)) {
            script2995(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, `No tasks found matching the '${varclient_8333}' search.<br>Please try another search term or update your filters.`);
        } else {
            script2995(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "No tasks found. Please try changing your filters.");
        };
    } else {
        script2995(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "No tasks found for your current locality.");
    };
    return;
}