//
function script18487(): void {
    var int0 = (ENUM_GETOUTPUTCOUNT(2345 as cs2enum) - 1);
    var string0 = "";
    while ((int0 >= 0)) {
        if ((CC_FIND(comp(1311, 504), ((int0 * 2) + 1)) == 1)) {
            string0 = enum_getvalue(0, 36, 2344 as cs2enum, int0);
            CC_SETGRAPHIC(13777 as graphic);
            script14990(0, `Set colour to ${string0}.`);
        };
        int0 = (int0 - 1);
    };
    return;
}