//
function script17271(int0: bas): void {
    if ((int0 != -1 as bas)) {
        CC_SETMODELANIM(BAS_GETANIM_READY(int0));
    } else if ((GENDER() == 1)) {
        CC_SETMODELANIM(BAS_GETANIM_READY(2703 as bas));
    } else {
        CC_SETMODELANIM(BAS_GETANIM_READY(2698 as bas));
    };
    return;
}