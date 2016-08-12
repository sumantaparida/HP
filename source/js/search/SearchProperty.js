$(document).ready(function () {

    //alert('test');
    //$("#btnShowSimple").click(function (e) {
    //    ShowDialog(false);
    //    e.preventDefault();
    //});

    //Agent contact modal in mobile device
    var windowsize = $(window).width();
    if (windowsize < 1000) {        
        $("#btnModal").removeClass("col-xs-6");
        $("#btnModal").addClass("col-xs-12");
    }
    else
    {
        $("#btnModal").css("margin-left","20%");
    }

    $("#ContentPlaceHolder1_txtNameProperty1").blur(function () {
        if ($("#ContentPlaceHolder1_txtNameProperty1").val() == "") {
            $("#ContentPlaceHolder1_txtNameProperty1").css({ 'border-color': 'red' });
        }
        else {
            $("#ContentPlaceHolder1_txtNameProperty1").css({ 'border-color': '' });
        }
    });

    $("#ContentPlaceHolder1_txtEmailProperty1").blur(function () {
        if ($("#ContentPlaceHolder1_txtEmailProperty1").val() == "") {

            $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': 'red' });
        }
        else {

            $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': '' });
        }
        if ($("#ContentPlaceHolder1_txtEmailProperty1").val() != "") {
            if (!ValidateEmail($("#ContentPlaceHolder1_txtEmailProperty1").val())) {

                $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': 'red' });

                return false;
            }
            else {

                $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
                $("#ContentPlaceHolder1_lblErrorEmail").text("");
            }
        }
    });

    $("#ContentPlaceHolder1_txtMessage1").blur(function () {
        if ($("#ContentPlaceHolder1_txtMessage1").val() == "") {

            $("#ContentPlaceHolder1_txtMessage1").css({ 'border-color': 'red' });

        }
        else {

            $("#ContentPlaceHolder1_txtMessage1").css({ 'border-color': '' });
        }
    });

    $("#ContentPlaceHolder1_txtTelphoneProperty").blur(function () {
        if ($("#ContentPlaceHolder1_txtTelphoneProperty").val() == "") {

            $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': 'red' });
        }
        else {

            $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': '' });
        }
        if ($("#ContentPlaceHolder1_txtTelphoneProperty").val() != "") {
            var mob = /^[1-9]{1}[0-9]{9}$/;

            if (mob.test($.trim($("#ContentPlaceHolder1_txtTelphoneProperty").val())) == false) {

                $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': 'red' });

            }
            else {

                $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': '' });
            }
        }
    });

});

function OpenPopup(projectCode, CustName, FirmName, ContactNo, EmailId, Location,Bedroom,PropertyType) {
    //alert(projectCode);
    //alert(CustName);
    //alert(FirmName);
    //alert(ContactNo);
    //alert(EmailId);
    $("#ContentPlaceHolder1_lblProjectCode").text(projectCode);
    $("#ContentPlaceHolder1_lblDealerName").text(CustName);
    $("#ContentPlaceHolder1_lblFirm").text(FirmName);
    $("#ContentPlaceHolder1_lblDelMob").text(ContactNo);
    $("#ContentPlaceHolder1_lblDelEmail").text(EmailId);
    $("#ContentPlaceHolder1_hdnPropertyLocation").val(Location);
    var PropertyDesc = Bedroom + ' ' + PropertyType;
    $("#ContentPlaceHolder1_hdnPropertyDesc").val(PropertyDesc);
    //$("#ContentPlaceHolder1_txtTelphoneProperty").val("");
    //$("#ContentPlaceHolder1_txtEmailProperty1").val("");

    $("#ContentPlaceHolder1_txtNameProperty1").val('');
    $("#ContentPlaceHolder1_txtNameProperty1").css({ 'border-color': '' });
    $("#ContentPlaceHolder1_txtTelphoneProperty").val('');
    $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': '' });
    $("#ContentPlaceHolder1_txtEmailProperty1").val('');
    $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': '' });

    $("#ContentPlaceHolder1_txtMessage1").val("I am interested in this property and would like to know more about this property.");
    $("#ContentPlaceHolder1_txtcode1").val("");
    $("#myModal").modal();
    $("#Verification").css("display", "none");
    $("#Thanks").css("display", "none");
    $("#Contact").css("display", "block");
}

function SaveContact() {
    //alert('contact Adv');
    var i = "0";
    if ($("#ContentPlaceHolder1_txtNameProperty1").val() == "") {
        $("#ContentPlaceHolder1_txtNameProperty1").css({ 'border-color': 'red' });
        i = "1";
    }
    else {
        $("#ContentPlaceHolder1_txtNameProperty1").css({ 'border-color': '' });
    }
    if ($("#ContentPlaceHolder1_txtTelphoneProperty").val() == "") {
        $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': 'red' });
        i = "1";
    }
    else {
        if ($("#ContentPlaceHolder1_txtTelphoneProperty").val() != "") {
            var mob = /^[1-9]{1}[0-9]{9}$/;

            if (mob.test($.trim($("#ContentPlaceHolder1_txtTelphoneProperty").val())) == false) {
                i = "1";
                $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': 'red' });
            }
            else {
                $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': '' });
            }
        }

        $("#ContentPlaceHolder1_txtTelphoneProperty").css({ 'border-color': '' });
    }
    if ($("#ContentPlaceHolder1_txtEmailProperty1").val() == "") {
        $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': 'red' });
        i = "1";
    }
    else {
        $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': '' });
    }
    if ($("#ContentPlaceHolder1_txtMessage1").val() == "") {
        $("#ContentPlaceHolder1_txtMessage1").css({ 'border-color': 'red' });
        i = "1";
    }
    else {
        $("#ContentPlaceHolder1_txtMessage1").css({ 'border-color': '' });
    }
    if ($("#ContentPlaceHolder1_txtEmailProperty1").val() != "") {
        if (!ValidateEmail($("#ContentPlaceHolder1_txtEmailProperty1").val())) {
            $("#ContentPlaceHolder1_txtEmailProperty1").css({ 'border-color': 'red' });
            i = "1";
        }
        else {

            $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
        }
    }
    var isAllow;
    if ($('#ContentPlaceHolder1_Ishpallowcount1').is(":checked")) {
        isAllow = true;

    }
    else {
        isAllow = false;
    }
    var isLoan
    if ($('#ContentPlaceHolder1_Loan1').is(":checked")) {
        isLoan = true;

    }
    else {
        isLoan = false;
    }
    var CUSTTYPE1 = "";

    if ($("#ContentPlaceHolder1_rdoIndividual1").is(':checked') == true) {

        CUSTTYPE1 = "MISC00029";
    }
    else {
        CUSTTYPE1 = "MISC00017";
    }
   // alert('1');
    var ProjectCode = $("#ContentPlaceHolder1_lblProjectCode").text();

    var CustomerName = $("#ContentPlaceHolder1_txtNameProperty1").val();

    var Mob = $("#ContentPlaceHolder1_txtTelphoneProperty").val();

    var EmailId = $("#ContentPlaceHolder1_txtEmailProperty1").val();

    var Message = $("#ContentPlaceHolder1_txtMessage1").val();

    var DealerName = $("#ContentPlaceHolder1_lblDealerName").text();

    $("#ContentPlaceHolder1_lblBrokerName").text(DealerName);

    var firmName = $("#ContentPlaceHolder1_lblFirm").text();

    $("#ContentPlaceHolder1_lblFirmName").text(firmName);

    var DealerContactno = $("#ContentPlaceHolder1_lblDelMob").text();

    $("#ContentPlaceHolder1_lblContactNo").text(DealerContactno);

    var DealerEmail = $("#ContentPlaceHolder1_lblDelEmail").text();

    $("#ContentPlaceHolder1_lblMailId").text(DealerEmail);
   
    var Location = $("#ContentPlaceHolder1_hdnPropertyLocation").val();

    var PropertyDesc = $("#ContentPlaceHolder1_hdnPropertyDesc").val();
    
    if (i == "1") {        
        return false;
    }
    else {
        //alert(ProjectCode);
        //alert(CustomerName);
        //alert(Mob);
        //alert(EmailId);
        //alert(Message);               
        //alert(DealerName);
        //alert(DealerContactno);
        //alert(DealerEmail);
        //alert(firmName);
        //alert(Location);
        
        var param = {
            PropertyCode: ProjectCode, CustomerName: CustomerName, Mob: Mob, EmailId: EmailId,
            Message: Message, QueryTypecode: "MISC00027", IsHI: isAllow, Loan: isLoan, CUSTTYPE: CUSTTYPE1,
            TabType: "1", DealerName: DealerName, DealerContactno: DealerContactno, DealerEmail: DealerEmail,
            PropertyDesc: PropertyDesc, firmName: firmName, Location: Location

        };

        $.ajax({
            url: "SearchProject.aspx/InsertContactpro",

            data: JSON.stringify(param),

            dataType: "json",

            type: "POST",

            contentType: "application/json; charset=utf-8",

            dataFilter: function (data) { return data; },

            success: function (data) {
                //alert(data.d);
                if (data.d != "0" && data.d != "Contact Dealer") {
                    //alert(data.d);
                    $("#ContentPlaceHolder1_lblVerMobileNo1").text(Mob);
                    $("#ContentPlaceHolder1_hdVerificationCode").val(data.d);
                    $("#Verification").css("display", "block");
                    $("#Thanks").css("display", "none");
                    $("#Contact").css("display", "none");
                    
                    $("#ContentPlaceHolder1_lblwrongcode").text("");
                    $("#ContentPlaceHolder1_txtcode1").val("");
                    
                }
                if (data.d == "Contact Dealer") {

                    $("#Verification").css("display", "none");
                    $("#Thanks").css("display", "block");
                    $("#Contact").css("display", "none");
                    
                }
                //Send Email
                $.ajax({
                    url: "SearchProject.aspx/SendMail",

                    data: JSON.stringify(param),

                    dataType: "json",

                    type: "POST",

                    contentType: "application/json; charset=utf-8",

                    dataFilter: function (data) { return data; },

                    success: function (data) { }

                });
            }
        });

    }
}

function VerifyCode() {

    //id = id - 1;
    //alert(id);
    //alert($("#ContentPlaceHolder1_hdVerificationCode").val());
    //alert($("#ContentPlaceHolder1_" + Repeaterid + "_txtcode" + type + "_" + id).val());
    //alert($("#ContentPlaceHolder1_txtcode").val());
    //alert($("#ContentPlaceHolder1_hdVerificationCode").val());

    if ($("#ContentPlaceHolder1_txtcode1").val() != $("#ContentPlaceHolder1_hdVerificationCode").val()) {
        $("#ContentPlaceHolder1_lblwrongcode").text("Wrong code");
        $("#ContentPlaceHolder1_txtcode1").css({ 'border-color': 'red' });
        return false;
    }
    else {
        $("#ContentPlaceHolder1_lblwrongcode").text("");
        $("#ContentPlaceHolder1_txtcode1").css({ 'border-color': '' });

        var param = {
            code: $("#ContentPlaceHolder1_txtcode1").val()
        };

        $.ajax({

            url: "SearchProject.aspx/VerifiCode",

            data: JSON.stringify(param),

            dataType: "json",

            type: "POST",

            contentType: "application/json; charset=utf-8",

            dataFilter: function (data) { return data; },

            success: function (data) {
                $("#Verification").css("display", "none");
                $("#Thanks").css("display", "block");
                $("#Contact").css("display", "none");
                $("#ContentPlaceHolder1_lblwrongcode").text("");
                $("#ContentPlaceHolder1_txtcode1").val("");
                e.preventDefault();

            }
        });
    }
}

function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};

function ShowDialog(modal) {
    $("#overlay").show();
    $("#dialog").fadeIn(300);

    if (modal) {
        $("#overlay").unbind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideDialog();
        });
    }
}

function HideDialog() {
    $("#overlay").hide();
    $("#dialog").fadeOut(300);
}


function BacktoTop() {   
    $('.fa-angle-double-up').click();   
    
}


$(document).ready(function () {
    $("div[data-click='myBtn']").click(function (event) {
        $("#myModal").modal();
    });

    //$("#imgslid").addClass("active");
});

///For Slider
function ShowSlider(projectId) {
    event.preventDefault();
    $("#ImgSlider" + projectId).show();
}
function CloseSlider(projectId) {
    event.preventDefault();
    $("#ImgSlider" + projectId).hide();
}

function ToTopOfPage() {
    //alert('page');
    //    setTimeout("window.scrollTo(0, 0)", 0);
    //$('.fa-angle-double-up').click();
}

$(document).ready(function () {
    EnableDisable();
});

function EnableDisable() {
    var usercode = '<%=Session["CustCode"] %>';

    if (usercode == "") {
        $("ContentPlaceHolder1_txtNameProperty1").removeAttr("disabled", "disabled");
        $("ContentPlaceHolder1_txtTelphoneProperty").removeAttr("disabled", "disabled");
        $("ContentPlaceHolder1_txtEmailProperty1").removeAttr("disabled", "disabled");
    }
    else {
        $("ContentPlaceHolder1_txtNameProperty1").attr("disabled", "disabled");
        $("ContentPlaceHolder1_txtTelphoneProperty").attr("disabled", "disabled");
        $("ContentPlaceHolder1_txtEmailProperty1").attr("disabled", "disabled");

    }

}