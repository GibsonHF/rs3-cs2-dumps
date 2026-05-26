//
function script18094(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(comp(1226, 68));
    script7852(80347204, int0, 0, 0, 0, 0, 0, 0, 1, 1, 7952, `Confirm<br>${enum_getvalue(0, 36, 108 as cs2enum, int0)}`);
    CC_SETOP(1, "Confirm");
    if (((varclient_7304 != comp(-1, 65535)) && (CC_FIND(varclient_7304, varclient_7305) == 1))) {
        script7872(1, 1, 1, 0);
    };
    if ((CC_FIND(int1, int2) == 1)) {
        script7872(1, 1, 1, 1);
        varclient_7304 = int1;
        varclient_7305 = int2;
    };
    return;
}