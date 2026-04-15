//
function script14879(int0: component, int1: unknown_int, int2: component, int3: int): void {
    var string0 = `You currently have ${TOSTRING_LOCALISED(int3, 1)} ${OC_NAME(49430 as obj)}.`;
    if ((int0 != comp(-1, 65535))) {
        script3536(string0, int0, -1);
    };
    if ((int1 != -1)) {
        stack(10316);
        stack(int1);
        IF_SETGRAPHIC();
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETTEXT(TOSTRING_LOCALISED(int3, 1), int2);
    };
    return;
}