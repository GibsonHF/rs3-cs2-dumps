//
function script6270(): void {
    var string0 = "";
    if ((script13749() == false)) {
        string0 = "Subscribe";
    };
    if ((varbitplayer_18167 == 1)) {
        script3093(-3, 4039 as dbrow, "Recent Billing Failure", "Your account has recently had a billing failure. Please check that your payment method is valid.", 2608, "", "Continue");
    };
    if ((varbitplayer_18167 == 2)) {
        script3093(12, 4037 as dbrow, "Recent Billing Failure", "Your membership has been cancelled due to billing failures. You will need to resubscribe.", 2608, string0, "Close");
    };
    return;
}