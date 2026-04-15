//[proc,quickchat_path_scroll]
function script1066(int0: component, int1: int, int2: int): void {
    var int3 = IF_GETWIDTH(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    while ((CC_FIND(int0, int5) == 1)) {
        int4 = (int4 + CC_GETWIDTH());
        int5 = (int5 + 1);
    };
    if ((int4 <= int3)) {
        int5 = 0;
        int6 = 0;
        while ((CC_FIND(int0, int5) == 1)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(int6, 0, 0, 0);
            if ((CC_FIND[1](script8601(int2), int5) == 1)) {
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            };
            int6 = (int6 + CC_GETWIDTH());
            int5 = (int5 + 1);
        };
        return;
    };
    CC_CREATE(int0, 4, (int1 + 1));
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(` ... <img=2>`);
    CC_SETTEXTSHADOW(true);
    CC_SETSIZE(PARAWIDTH(` ... <img=2>`, int3, 26 as fontmetrics), IF_GETHEIGHT(int0), 0, 0);
    int4 = CC_GETWIDTH();
    if ((CC_FIND(int0, int1) == 1)) {
        int4 = (int4 + CC_GETWIDTH());
    };
    int5 = 0;
    while ((int5 < int1)) {
        if ((CC_FIND(int0, int5) == 1)) {
            if (((int4 + CC_GETWIDTH()) <= int3)) {
                CC_SETHIDE(false);
                int4 = (int4 + CC_GETWIDTH());
            } else {
                CC_SETHIDE(true);
            };
        };
        int5 = (int5 + 1);
    };
    int5 = 0;
    int6 = 0;
    while ((int5 < int1)) {
        if ((CC_FIND(int0, int5) == 1)) {
            if ((CC_GETHIDE() == false)) {
                CC_SETPOSITION(int6, 0, 0, 0);
                if ((CC_FIND[1](script8601(int2), int5) == 1)) {
                    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                };
                int6 = (int6 + CC_GETWIDTH());
            } else if ((CC_FIND[1](script8601(int2), int5) == 1)) {
                CC_SETHIDE[1](true);
            };
        };
        int5 = (int5 + 1);
    };
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETPOSITION(int6, 0, 0, 0);
        int6 = (int6 + CC_GETWIDTH());
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETPOSITION(int6, 0, 0, 0);
        if ((CC_FIND[1](script8601(int2), int5) == 1)) {
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        };
    };
    return;
}