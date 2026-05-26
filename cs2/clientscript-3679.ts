//
function script3679(int0: number, int1: number): void {
    IF_CLEAROPS(int0);
    IF_SETOP(5, "Examine<col=ff9040>", int0);
    IF_SETOPBASE(`<col=FF981F>${enum_getvalue(0, 36, 3274 as cs2enum, int1)} piece`, int0);
    return;
}