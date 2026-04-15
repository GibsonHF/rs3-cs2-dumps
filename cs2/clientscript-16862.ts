//
function script16862(int0: component, int1: struct, int2: struct, int3: int): void {
    var string0 = "";
    if ((IF_FIND(int0) == 1)) {
        CC_DELETEALL(int0);
        string0 = script16868(int3);
        if ((script16848(int3) == 0)) {
            script7794(int0, int2);
        } else {
            script7794(int0, int1);
        };
    };
    return;
}