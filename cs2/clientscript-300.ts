//[proc,worldmap_elements_textbox]
function script300(int0: coordgrid, int1: unknown_int, int2: struct, int3: component, int4: int, int5: int, int6: int, int7: int, int8: int, string0: string): int {
    var int9 = 0;
    var int10 = 0;
    [int9, int10] = script296(int0, int1, int3, int4, int5, int6, int7);
    var int11 = struct_getparam(int2, 650);
    var int12 = struct_getparam(int2, 651);
    var int13 = ((PARAWIDTH(string0, 512, 32 as fontmetrics) + int11) + int11);
    var int14 = ((((PARAHEIGHT(string0, IF_GETWIDTH(int3), 32 as fontmetrics) * 13) + 2) + int12) + int12);
    var int15 = struct_getparam(int2, 647);
    var int16 = struct_getparam(int2, 648);
    var int17 = struct_getparam(int2, 649);
    var int18 = struct_getparam(int2, 652);
    var int19 = ((int13 - int11) / 2);
    var int20 = ((int14 - int12) / 2);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION(int9, int10, 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION(int9, int10, 1, 1);
        CC_SETSIZE((int13 - (int11 * 2)), (int14 - (int12 * 2)), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int2, 646));
        CC_SETTILING(true);
    };
    var int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION(int9, (int10 - int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION(int9, (int10 - int20), 1, 1);
        CC_SETSIZE((int13 - (int11 * 2)), int12, 0, 0);
        CC_SETGRAPHIC(int16);
        CC_SETTILING(true);
        CC_SETVFLIP(false);
        CC_SETHFLIP(false);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION(int9, (int10 + int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION(int9, (int10 + int20), 1, 1);
        CC_SETSIZE((int13 - (int11 * 2)), int12, 0, 0);
        CC_SETGRAPHIC(int16);
        CC_SETTILING(true);
        CC_SETVFLIP(true);
        CC_SETHFLIP(false);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 - int19), int10, 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 - int19), int10, 1, 1);
        CC_SETSIZE(int11, (int14 - (int12 * 2)), 0, 0);
        CC_SETGRAPHIC(int17);
        CC_SETTILING(true);
        CC_SETVFLIP(false);
        CC_SETHFLIP(false);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 + int19), int10, 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 + int19), int10, 1, 1);
        CC_SETSIZE(int11, (int14 - (int12 * 2)), 0, 0);
        CC_SETGRAPHIC(int17);
        CC_SETTILING(true);
        CC_SETVFLIP(false);
        CC_SETHFLIP(true);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 - int19), (int10 - int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 - int19), (int10 - int20), 1, 1);
        CC_SETSIZE(int11, int12, 0, 0);
        CC_SETGRAPHIC(int15);
        CC_SETTILING(false);
        CC_SETVFLIP(false);
        CC_SETHFLIP(false);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 + int19), (int10 - int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 + int19), (int10 - int20), 1, 1);
        CC_SETSIZE(int11, int12, 0, 0);
        CC_SETGRAPHIC(int15);
        CC_SETTILING(false);
        CC_SETVFLIP(false);
        CC_SETHFLIP(true);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 - int19), (int10 + int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 - int19), (int10 + int20), 1, 1);
        CC_SETSIZE(int11, int12, 0, 0);
        CC_SETGRAPHIC(int15);
        CC_SETTILING(false);
        CC_SETVFLIP(true);
        CC_SETHFLIP(false);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 + int19), (int10 + int20), 1, 1);
    } else {
        CC_CREATE(int3, 5, int8);
        CC_SETPOSITION((int9 + int19), (int10 + int20), 1, 1);
        CC_SETSIZE(int11, int12, 0, 0);
        CC_SETGRAPHIC(int15);
        CC_SETTILING(false);
        CC_SETVFLIP(true);
        CC_SETHFLIP(true);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION((int9 + 1), (int10 + 1), 1, 1);
    } else {
        CC_CREATE(int3, 4, int8);
        CC_SETPOSITION((int9 + 1), (int10 + 1), 1, 1);
        CC_SETSIZE(int13, int14, 0, 0);
        CC_SETCOLOUR(struct_getparam(int2, 653));
        CC_SETTEXTALIGN(1, 1, 13);
        CC_SETTEXTFONT(32 as fontmetrics);
        CC_SETTEXT(string0);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int3, int8) == 1)) {
        CC_SETPOSITION(int9, int10, 1, 1);
    } else {
        CC_CREATE(int3, 4, int8);
        CC_SETPOSITION(int9, int10, 1, 1);
        CC_SETSIZE(int13, int14, 0, 0);
        CC_SETCOLOUR(int18);
        CC_SETTEXTALIGN(1, 1, 13);
        CC_SETTEXTFONT(32 as fontmetrics);
        CC_SETTEXT(string0);
    };
    return ++int8;
}