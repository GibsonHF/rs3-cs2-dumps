//
function script16969(int0: component, int1: component, string0: string): void {
    if ((int0 != comp(-1, 65535))) {
        IF_SETOPBASE(`<col=FFFF00>${string0}</col>`, int0);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETOPBASE(`<col=FFFF00>${string0}</col>`, int1);
    };
    return;
}