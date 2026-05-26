//
function script15512(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = script3810(int0, int1);
    var int9 = script15510(int0, int1);
    if ((int9 > 0)) {
        var int5 = int9;
    };
    var int10 = ((int8 * 100) / int5);
    var int11 = 0;
    if ((int7 == 1)) {
        int11 = (IF_GETHEIGHT(int1) - int4);
    } else {
        int11 = (IF_GETWIDTH(int1) - int4);
    };
    var int12 = ((int10 * int11) / 100);
    if ((int7 == 1)) {
        IF_SETSIZE(int3, int12, 0, 0, int2);
    } else {
        IF_SETSIZE(int12, int3, 0, 0, int2);
    };
    if ((int6 != comp(-1, 65535))) {
        IF_SETTEXT(`${inttostring(int8, 10)}/${inttostring(int5, 10)}`, int6);
    };
    return;
}