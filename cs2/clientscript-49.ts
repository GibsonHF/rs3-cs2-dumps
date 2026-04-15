//[clientscript,prayer_varupdate]
function script49(int0: component, int1: component, int2: int, int3: struct): void {
    if ((script7083(int3) == 1)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETOP(1, `Deactivate <col=FF00>${struct_getparam(int3, 2794)}</col>`);
        };
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETGRAPHIC(14710 as graphic);
        };
    } else {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETOP(1, `Activate <col=FF00>${struct_getparam(int3, 2794)}</col>`);
        };
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETGRAPHIC(-1 as graphic);
        };
    };
    return;
}