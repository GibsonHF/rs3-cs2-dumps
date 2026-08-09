//
function script17742(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number): number {
    var int13 = dbrow_getfield(int2, 946272, int3);
    var int14 = 1;
    if (((int4 == 0) || (script17483(int13) == 0))) {
        int14 = 0;
    };
    script15938(int0, int3, 0, int5, int6, int7, int8, int9, int10, int11, int12);
    script9195(int3, 4, (4 + (28 / 2)), 0, 0, 1, 0, 0, 0, 0, 16777215);
    if ((int14 == 1)) {
        CC_SETCOLOUR(5758463);
    } else {
        CC_SETCOLOUR(1974309);
    };
    script7918(int3, 1, 4, 0, 0, 1, 28, 28, 0, 0, 30941);
    if ((int14 == 1)) {
        CC_SETCOLOUR(6507376);
        CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 8276347));
        CC_SETONMOUSELEAVE(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), CC_GETCOLOUR()));
    } else {
        CC_SETCOLOUR(3487045);
        CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 4142669));
        CC_SETONMOUSELEAVE(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), CC_GETCOLOUR()));
    };
    script7918(int3, 2, 4, 0, 0, 1, 28, 28, 0, 0, 30942);
    if ((int14 == 1)) {
        CC_SETCOLOUR(5758463);
        CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 10218495));
        CC_SETONMOUSELEAVE(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), CC_GETCOLOUR()));
    } else {
        CC_SETCOLOUR(1974309);
        CC_SETONMOUSEOVER(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), 2565682));
        CC_SETONMOUSELEAVE(callback(script10011, CC_GETPARENTLAYER(), CC_GETID(), CC_GETCOLOUR()));
    };
    script10485(int3, 3, 4, 0, 0, 1, 28, 28, 0, 0, 2064, dbrow_getfield(int13, 950272, 0));
    CC_SETTEXTFONT(167 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTSHADOW(true);
    CC_SETOP(1, "Info");
    CC_SETOPCURSOR(1, 172);
    CC_SETONOP(callback(script17743, int13));
    var int15 = DB_GETFIELDCOUNT(int13, 950288);
    if ((int15 > 6)) {
        script12478(`Skill tree level exceeds max node count - count: ${inttostring(int15, 10)} (max: ${inttostring(6, 10)})`);
        int15 = 6;
    };
    script15938(int1, int3, 0, int5, int6, int7, int8, int9, int10, int11, int12);
    var int16 = 1;
    var int17 = -1;
    int17 = (int17 + 1);
    while ((int17 < int15)) {
        int16 = script17744(int0, int3, 0, int1, int3, 0, int3, int13, int17, int14, ((((4 + 28) / 2) + ((0 - ((50 + 12) / 2)) * (int15 - 1))) + ((50 + 12) * int17)), 0, 1, 1, 50, 50, 0, 0);
    };
    var int18 = CC_GETX();
    var int19 = CC_GETWIDTH();
    if ((CC_FINDBYCATEGORY(int0, int3, 4) == 1)) {
        CC_SETSIZE(((int18 + (int19 / 2)) - CC_GETX()), 0, 0, 0);
        CC_SETLINEWID(2);
        CC_SETTRANS(32);
        CC_SENDTOBACK();
    };
    return int14;
}