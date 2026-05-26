//
function script20521(): void {
    if ((IF_GETHEIGHT(96665652) >= 404)) {
        IF_SETOP(1, "Expand", 96665658);
        IF_SETVFLIP(0, 96665659);
        script14092(96665652, -1, 150, 0, 60, 0, 20, 0);
    } else {
        IF_SETOP(1, "Collapse", 96665658);
        IF_SETVFLIP(1, 96665659);
        script14092(96665652, -1, 450, 0, 404, 0, 20, 0);
    };
    return;
}