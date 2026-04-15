//
function script16863(int0: component, int1: int, int2: component): void {
    script2731(int0, -1, 21);
    var string0 = "";
    if ((IF_FIND(int0) == 1)) {
        string0 = script16868(int1);
        CC_SETTEXT(string0);
        if ((script16848(int1) == 0)) {
            CC_SETONTIMER(callback());
            if ((int2 != -1)) {
                CC_DELETEALL(int2);
                script7794(int2, 21362 as struct);
            };
        };
    };
    return;
}