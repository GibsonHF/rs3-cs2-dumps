//
function script9334(int0: struct): void {
    var int1 = comp(698, 2);
    var int2 = 4;
    var int3 = 0;
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3899));
        if (((CC_FIND(int1, (int3 + 1)) == 1) && (CC_FIND[1](int1, (int3 + 2)) == 1))) {
            CC_SETSIZE((STRINGWIDTH(struct_getparam(int0, 3902), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT(), 0, 0);
            CC_SETSIZE[1]((STRINGWIDTH(struct_getparam(int0, 3902), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT[1](), 0, 0);
            CC_SETTEXT[1](struct_getparam(int0, 3902));
        };
    };
    int3 = (int3 + 3);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3900));
        if (((CC_FIND(int1, (int3 + 1)) == 1) && (CC_FIND[1](int1, (int3 + 2)) == 1))) {
            CC_SETSIZE((STRINGWIDTH(struct_getparam(int0, 3903), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT(), 0, 0);
            CC_SETSIZE[1]((STRINGWIDTH(struct_getparam(int0, 3903), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT[1](), 0, 0);
            CC_SETTEXT[1](struct_getparam(int0, 3903));
        };
    };
    int3 = (int3 + 3);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3901));
        if (((CC_FIND(int1, (int3 + 1)) == 1) && (CC_FIND[1](int1, (int3 + 2)) == 1))) {
            CC_SETSIZE((STRINGWIDTH(struct_getparam(int0, 3904), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT(), 0, 0);
            CC_SETSIZE[1]((STRINGWIDTH(struct_getparam(int0, 3904), 29 as fontmetrics) + (2 * int2)), CC_GETHEIGHT[1](), 0, 0);
            CC_SETTEXT[1](struct_getparam(int0, 3904));
        };
    };
    int3 = (int3 + 3);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 3869));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 3905));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 6294));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 3906));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 6294));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 3907));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 6294));
    };
    int3 = (int3 + 1);
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 3908));
    };
    if ((struct_getparam(int0, 6292) == 1)) {
        if ((struct_getparam(int0, 6293) == 1)) {
            IF_SETHIDE(true, comp(698, 4));
            IF_SETHIDE(false, comp(698, 3));
        } else if ((PLAYERMEMBER() == true)) {
            IF_SETHIDE(true, comp(698, 4));
            if ((MAP_MEMBERS() == 1)) {
                IF_SETHIDE(false, comp(698, 3));
            } else {
                IF_SETHIDE(true, comp(698, 3));
            };
        };
    };
    return;
}