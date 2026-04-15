//
function script1280(int0: inv, int1: int, int2: component, int3: int): void {
    var string0 = "";
    if ((CC_FIND(int2, int3) == 1)) {
        if ((INV_GETOBJ(int0, int1) != -1 as obj)) {
            string0 = `<col=FF981F>${OC_NAME(INV_GETOBJ(int0, int1))}`;
            CC_SETOBJECT(INV_GETOBJ(int0, int1), INV_GETNUM(int0, int1));
            CC_SETOPBASE(string0);
            if ((script13749() == false)) {
                CC_SETDRAGDEADZONE(5);
                CC_SETDRAGDEADTIME(10);
            } else {
                CC_SETDRAGDEADZONE(5);
                CC_SETDRAGDEADTIME(5);
            };
            CC_SETOUTLINE(1);
        } else {
            CC_SETMODEL(-1 as model);
            CC_CLEAROPS();
            CC_SETDRAGDEADZONE(0);
            CC_SETDRAGDEADTIME(0);
            CC_SETONDRAGCOMPLETE(callback());
        };
    };
    return;
}