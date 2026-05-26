//
function script1133(int0: number, int1: number, int2: number): void {
    var string0 = "";
    var string1 = "this colour";
    var int3 = 0;
    if ((struct_getparam(int2, 3840) == 0)) {
        IF_SETHIDE(0, int0);
        CC_CREATE(int0, 3, int3);
        CC_SETPOSITION(2, 2, 0, 0);
        CC_SETSIZE(2, 2, 1, 1);
        CC_SETCOLOUR(struct_getparam(int2, 2502));
        CC_SETFILL(1);
        int3 = (int3 + 1);
        CC_CREATE(int0, 5, int3);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(20, 20, 0, 0);
        int3 = (int3 + 1);
        if ((varclient_1967 == int1)) {
            CC_SETGRAPHIC(2289);
        } else {
            CC_SETGRAPHIC(2288);
        };
        string1 = struct_getparam(int2, 2548);
        string0 = `Recolour this item to ${string1}.`;
        script14990(0, string0);
    } else {
        IF_SETHIDE(1, int0);
    };
    return;
}