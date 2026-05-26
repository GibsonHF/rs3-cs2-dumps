//
function script17744(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number): number {
    var int18 = dbrow_getfield(int7, 950288, int8);
    var int19 = 1;
    var int20 = 0;
    var int21 = script17492(int18);
    var int22 = 1;
    var int23 = -1;
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        if ((script17491(int18) == 0)) {
            int19 = 0;
        };
        if (((int6 == varclient_7216) && (int8 == varclient_7217))) {
            int20 = 1;
        };
        if ((int21 == 1)) {
            int22 = 0;
            var int14 = SCALE(int14, 100, 110);
            var int15 = SCALE(int15, 100, 110);
        };
        script7919(int1, IF_GETNEXTCATEGORYSUBID(int1, int0), int10, int11, int12, int13, int14, int15, int16, int17, 31307, 0, 0, 0, 0);
        if ((int20 == 1)) {
            CC_SETGRAPHIC(31306);
            CC_SETCOLOUR(15777401);
            CC_CLEAROPS();
            CC_CLEARSCRIPTHOOKS();
        } else if ((int21 == 1)) {
            CC_SETGRAPHIC(31306);
            CC_SETCOLOUR(5758463);
            CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 10218495));
        } else {
            CC_SETCOLOUR(8421504);
            if (((int9 == 1) && (int19 == 1))) {
                CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 5758463));
            } else {
                CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 11053224));
            };
        };
        CC_SETONMOUSELEAVE(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), CC_GETCOLOUR()));
        int23 = script17489(int18, int22, 0);
        if ((int23 != -1)) {
            script7919(int1, IF_GETNEXTCATEGORYSUBID(int1, int0), int10, int11, int12, int13, SCALE(int14, 100, 80), SCALE(int15, 100, 80), int16, int17, int23, 0, 0, 0, 0);
        };
        if (((int21 == 0) && ((int9 == 0) || (int19 == 0)))) {
            script7919(int1, IF_GETNEXTCATEGORYSUBID(int1, int0), int10, int11, int12, int13, (int14 - 4), (int15 - 4), int16, int17, 31307, 0, 0, 0, 0);
            CC_SETCOLOUR(1974309);
            CC_SETTRANS(96);
        };
    };
    script10507(int3, int4, ((0 + 1) + int8), int4, int5, int10, int11, int12, int13, int14, int15, int16, int17, -1, "");
    if ((script17488(int18) == 1)) {
        CC_SETOPBASE(`<col=F8D56B>${script17486(int18)}`);
    } else {
        CC_SETOPBASE(`<col=B8D1D1>${script17486(int18)}`);
    };
    CC_SETOP(1, "Select");
    CC_SETOPCURSOR(1, 46);
    CC_SETONOP(callback(script17745, int6, int8));
    return int19;
}