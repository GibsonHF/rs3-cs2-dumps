//
function script4547(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    script7794(int3, 21361 as struct);
    script15947(int3, 0, IF_GETNEXTSUBID(int3), 0, 0, 0, 0, 0, 0, 1, 1, 2100 as dbrow, "If you join a clan you will be able to<br>chat with your clanmates from here.");
    CC_SETTEXTALIGN(1, 1, 0);
    if ((script13749() == false)) {
        IF_SETTEXT("Not in chat", comp(912, 22));
        IF_SETSIZE(IF_GETWIDTH(int7), 0, 0, 0, int7);
    } else {
        IF_SETTEXT("(Not in clan chat)", comp(1044, 23));
    };
    IF_SETSCROLLSIZE(0, 0, int4);
    IF_SETSCROLLPOS(0, 0, int4);
    IF_SETHIDE(true, int5);
    return;
}