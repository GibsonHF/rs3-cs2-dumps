//
function script4547(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    script7794(int3, 21361);
    script15947(int3, 0, IF_GETNEXTSUBID(int3), 0, 0, 0, 0, 0, 0, 1, 1, 2100, "If you join a clan you will be able to<br>chat with your clanmates from here.");
    CC_SETTEXTALIGN(1, 1, 0);
    if ((script13749() == 0)) {
        IF_SETTEXT("Not in chat", 59768854);
        IF_SETSIZE(IF_GETWIDTH(int7), 0, 0, 0, int7);
    } else {
        IF_SETTEXT("(Not in clan chat)", 68419607);
    };
    IF_SETSCROLLSIZE(0, 0, int4);
    IF_SETSCROLLPOS(0, 0, int4);
    IF_SETHIDE(1, int5);
    return;
}