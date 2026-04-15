//
function script8447(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    var int0 = script8247(int0);
    var int1 = script9094();
    IF_SETHIDE(false, struct_getparam(int1, 8268));
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int2 = 0;
    var int3 = 0;
    [string0, string1, string2, int2, int3] = script967(int0, 1, 1, 1);
    stack(struct_getparam(int0, 2802));
    stack(struct_getparam(int1, 8237));
    IF_SETGRAPHIC();
    if ((STRING_LENGTH(string2) <= 0)) {
        IF_SETTEXT(string0, struct_getparam(int1, 8231));
    } else {
        IF_SETTEXT(`${string0} - ${string2}`, struct_getparam(int1, 8231));
    };
    if (((IF_FIND(struct_getparam(int1, 8232)) == 1) && (IF_FIND[1](struct_getparam(int1, 8233)) == 1))) {
        CC_SETTEXT(string1);
        CC_SETSIZE(10, (PARAHEIGHT(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS()) * 14), 1, 0);
        if ((CC_GETHEIGHT() > CC_GETHEIGHT[1]())) {
            IF_SETSIZE(16, 0, 1, 1, struct_getparam(int1, 8234));
            IF_SETSIZE(16, 0, 0, 1, struct_getparam(int1, 8235));
            IF_SETSCROLLPOS(0, 0, struct_getparam(int1, 8234));
            IF_SETSCROLLSIZE(0, CC_GETHEIGHT(), struct_getparam(int1, 8234));
            script7791(struct_getparam(int1, 8235), struct_getparam(int1, 8234));
        } else {
            IF_SETSIZE(0, 0, 1, 1, struct_getparam(int1, 8234));
            CC_DELETEALL(struct_getparam(int1, 8235));
            IF_SETSCROLLPOS(0, 0, struct_getparam(int1, 8234));
            IF_SETSCROLLSIZE(0, 0, struct_getparam(int1, 8234));
        };
    };
    script3124(int0, int1);
    script15405(int0, struct_getparam(int1, 8935));
    var int4 = script7473(int0, int2, int3, 0);
    if ((int4 > 0)) {
        IF_SETHIDE(true, struct_getparam(int1, 8240));
    } else {
        IF_SETHIDE(false, struct_getparam(int1, 8240));
    };
    return;
}