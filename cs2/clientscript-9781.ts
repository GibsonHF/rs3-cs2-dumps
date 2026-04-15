//
function script9781(int0: boolean, int1: component, int2: int, int3: component): boolean {
    var int4 = false;
    if ((int2 < 30)) {
        var int0 = true;
    };
    if ((int2 < 200)) {
        int4 = true;
    };
    script13971(int1, comp(-1, 65535), 28553 as struct, "Select", int4);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} / ${TOSTRING_LOCALISED(200, 1)}`, int3);
    return int0;
}