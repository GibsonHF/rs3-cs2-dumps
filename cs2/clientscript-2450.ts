//[clientscript,notes_drag]
function script2450(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int3 = (int3 - script8408(int1));
    var int6 = script7799(int0, 2228236);
    var int7 = script7799(int0, 2228237);
    var int8 = script7799(int0, 2228230);
    var int9 = script7799(int0, 2228239);
    if ((CC_FIND(int1, int2) == 1)) {
        IF_SETHIDE(1, int9);
        IF_SETHIDE(0, int7);
        int5 = CC_GETHEIGHT();
        IF_SETPOSITION(CC_GETX(), int3, 0, 0, int7);
        IF_SETSIZE(CC_GETWIDTH(), int5, 0, 0, int7);
        int4 = (int3 + (int5 / 2));
    };
    var int10 = 0;
    var int11 = IF_GETY(int6);
    var int12 = (int11 + int5);
    var int13 = (int11 + IF_GETHEIGHT(int6));
    var int14 = (int13 - int5);
    if (((int4 >= int11) && (int4 <= int12))) {
        int10 = -4;
    } else if (((int4 >= int14) && (int4 <= int13))) {
        int10 = 4;
    } else {
        varclient_821 = 0;
        return;
    };
    varclient_821 = (varclient_821 + 1);
    if ((varclient_821 > 5)) {
        script157(int8, int6, (IF_GETSCROLLY(int6) + int10), 1);
    };
    return;
}