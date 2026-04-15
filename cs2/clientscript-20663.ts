//
function script20663(int0: dbrow): string {
    switch (int0) {
        case 17569:
        case 17694: {
            return "By continuing with this purchase, you acknowledge that you have read and agree to our Terms and Conditions.<br><br>Your subscription will be charged to your App Store account at confirmation of purchase.<br><br>Any unused portion of a free trial will be forfeited if you purchase a subscription.<br><br>You authorise us to automatically charge you until you cancel your subscription. You can manage and cancel your subscription at anytime within your App Store account settings.<br><br>Terms and Conditions and Privacy Policy apply.";
        }
    };
    return dbrow_getfield(int0, 499888, 0);
}