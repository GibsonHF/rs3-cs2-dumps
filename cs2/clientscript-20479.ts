//
function script20479(int0: dbrow, string0: string): void {
    CC_SETTEXT(string0);
    if ((STRING_LENGTH(string0) == 0)) {
        return;
    };
    var int1 = script20489(int0);
    if ((((int1 == -1 as stylesheet) || (STYLESHEET_HAS_VALUE(int1, "groupbox.header.width") == 0)) || (STYLESHEET_HAS_VALUE(int1, "groupbox.header.height") == 0))) {
        return;
    };
    var int2 = STYLESHEET_GET_VALUE(int1, "groupbox.header.width", 0);
    if ((int2 <= 65000)) {
        return;
    };
    var int3 = STYLESHEET_GET_VALUE(int1, "groupbox.header.height", 0);
    var int4 = STYLESHEET_GET_VALUE(int1, "groupbox.header.width.min", 20);
    var int5 = STYLESHEET_GET_VALUE(int1, "groupbox.header.width.spacing", 4);
    var int6 = STYLESHEET_GET_VALUE(int1, "groupbox.header.alignment", 0);
    switch (int2) {
        case 65535: {
            unk11083(MIN(255, CC_GETWIDTH()), int3, 0, 0, int6);
            break;
        }
        case 65534: {
            if ((STYLESHEET_HAS_VALUE(int1, "groupbox.header.background.sprite.edge.horizontal") == 1)) {
                int2 = (2 * STYLESHEET_GET_VALUE(int1, "groupbox.header.background.sprite.edge.horizontal", 0));
                int2 = (int2 + PARAWIDTH(string0, 2147483647, CC_GETFONTMETRICS()));
                int2 = (int2 + (int5 * 2));
            } else if (((STYLESHEET_HAS_VALUE(int1, "groupbox.header.background.sprite.edge.left") == 1) && (STYLESHEET_HAS_VALUE(int1, "groupbox.header.background.sprite.edge.right") == 1))) {
                int2 = (STYLESHEET_GET_VALUE(int1, "groupbox.header.background.sprite.edge.left", 0) + STYLESHEET_GET_VALUE(int1, "groupbox.header.background.sprite.edge.right", 0));
                int2 = (int2 + PARAWIDTH(string0, 2147483647, CC_GETFONTMETRICS()));
                int2 = (int2 + (int5 * 2));
            } else {
                int2 = CC_GETWIDTH();
            };
            unk11083(MIN(MIN(255, MAX(int2, int4)), CC_GETWIDTH()), int3, 0, 0, int6);
            break;
        }
    };
    return;
}