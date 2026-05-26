//
function script16744(int0: number): void {
    if ((varclient_4193 == false)) {
        varclient_4193 = true;
    };
    if ((script13749() == 1)) {
        varclient_4193 = true;
    };
    script7874(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4486, "Trust this computer for 30 days");
    script7889(1, 1, varclient_4193);
    CC_SETONBUTTONCLICK(callback(script9801, int0, CC_GETID()));
    return;
}