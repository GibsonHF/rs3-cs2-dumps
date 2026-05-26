//
function script14879(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = `You currently have ${TOSTRING_LOCALISED(int3, 1)} ${OC_NAME(49430 as obj)}.`;
    if ((int0 != -1)) {
        script3536(string0, int0, -1);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETGRAPHIC(10316 as graphic, int1);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETTEXT(TOSTRING_LOCALISED(int3, 1), int2);
    };
    return;
}