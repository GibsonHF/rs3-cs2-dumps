//
function script19436(int0: int): void {
    CC_SETOP(1, "Select");
    CC_SETOPCURSOR(1, 36);
    CC_SETOPBASE(`Tier ${inttostring((int0 + 1), 10)}`);
    CC_SETONOP(callback(script19437, -2147483645, -2147483643));
    return;
}