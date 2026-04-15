//
function script2011(int0: int, int1: int): void {
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3509);
    var int4 = script10405(int0);
    var int5 = struct_getparam(int4, 3509);
    var int6 = struct_getparam(int4, 3510);
    var int7 = script8418(int4, 0);
    var int8 = struct_getparam(int7, 3613);
    var int9 = script8373(script8374(int5));
    var int10 = 0;
    while ((CC_FIND(int3, int10) == 1)) {
        CC_CREATE[1](int5, 5, int9);
        CC_SETPARAM_INT[1](3540, cc_getparam(3540));
        CC_SETTRANS[1](CC_GETTRANS());
        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        switch (MODULO(int10, 4)) {
            case 0: {
                CC_SETGRAPHIC[1](int8);
                break;
            }
            case 1: {
                CC_SETGRAPHIC[1](CC_GETGRAPHIC());
                break;
            }
            case 2: {
                CC_SETGRAPHIC[1](CC_GETGRAPHIC());
                CC_SETCOLOUR[1](CC_GETCOLOUR());
                CC_SETHIDE[1](CC_GETHIDE());
                break;
            }
            case 3: {
                CC_SETTEXT[1](CC_GETTEXT());
                CC_SETHIDE[1](CC_GETHIDE());
                break;
            }
        };
        int9 = (int9 + 1);
        int10 = (int10 + 1);
    };
    script8359(int0, (int9 / 4), 0);
    if ((IF_GETHIDE(int6) == false)) {
        if (((IF_GETSCROLLWIDTH(int3) > 0) && (IF_GETSCROLLX(int3) >= (IF_GETSCROLLWIDTH(int3) - IF_GETWIDTH(int3))))) {
            IF_SETSCROLLPOS(IF_GETSCROLLWIDTH(int5), IF_GETSCROLLY(int5), int5);
        } else {
            IF_SETSCROLLPOS(IF_GETSCROLLX(int3), 0, int5);
        };
        script1846(int0);
        if ((CC_FIND(int6, 0) == 1)) {
            CC_SETONMOUSEREPEAT(callback(script461, int0, -2147483645, -2147483643, int5, -1, (CLIENTCLOCK() + 10)));
        };
        if ((CC_FIND(int6, 1) == 1)) {
            CC_SETONMOUSEREPEAT(callback(script461, int0, -2147483645, -2147483643, int5, 1, (CLIENTCLOCK() + 10)));
        };
    };
    varclient_4106 = varclient_3466;
    return;
}