//
function script1449(int0: number): void {
    var int1 = script10495(0);
    var string0 = `Copyright © 1999-${inttostring(DATE_YEAR(), 10)}${inttostring(PUSH_CONSTANT_INT[16](", Jagex Ltd.<br>Use subject to <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Terms and Conditions</col>, <col=", int1))}>Privacy Policy</col>`;
    if ((CLIENTTYPE() == 7)) {
        string0 = strconcat(`${string0}${inttostring(PUSH_CONSTANT_INT[16](" and <col=", int1))}>Software Licence</col>`);
    };
    string0 = strconcat(`${string0}${inttostring(PUSH_CONSTANT_INT[16](".<br><col=", int1))}>Do not sell or share my personal information</col>.`);
    int1 = script10495(3);
    IF_SETCOLOUR(int1, int0);
    IF_SETTEXT(string0, int0);
    IF_SETONMOUSEREPEAT(callback(script3876, "Jagex does not sell personal information as the term 'sell' is commonly understood. We do allow service providers to use your personal information for advertising, marketing, and analytics. Please select this link for more information on how to opt out in our Privacy Policy.", int0, -1), int0);
    return;
}