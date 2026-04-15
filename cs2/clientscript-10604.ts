//
function script10604(int0: component, int1: int): void {
    IF_CLEAROPS(int0);
    IF_SETOP(5, "Examine<col=ff9040>", int0);
    IF_SETOPBASE(`<col=FF981F>${enum_getvalue(0, 36, 9245 as cs2enum, int1)} piece`, int0);
    return;
}