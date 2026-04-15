//
function script14850(): void {
    var int0 = script14619();
    var int1 = script14620();
    IF_SETTEXT(`${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int1, 1)}`, comp(691, 100));
    script3536(`You are currently harnessing ${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int1, 1)} energy from the monolith.`, comp(691, 9), -1);
    return;
}