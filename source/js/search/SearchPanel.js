



$(document).ready(function () {
 //   alert("auto");
               
                var selected = "";
                var cnt = "";
                $(".chkPropertytype").change(function () {
                  
                   
                    if ($(".chkPropertytype").is(":checked")) {
                     
                        if ($(".chkResProp").is(":checked")) {
                            
                            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val("Residential");
                            selected = $(".chkPropertytype:checked:first").next('span').text();
                            cnt = $(".chkPropertytype:checked").size();
                           
                            $(".chkResProp").propAttr({

                                disabled: false
                            });
                            $(".chkComrProp").propAttr({
                                disabled: true
                            });
                        }
                        if ($(".chkComrProp").is(":checked")) {
                           
                            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val("Commercial");
                            selected = $(".chkPropertytype:checked:first").next('span').text();
                            cnt = $(".chkPropertytype:checked").size();
                           // alert(selected);
                          //  alert(cnt);
                            $(".chkResProp").propAttr({
                                disabled: true
                            });                            
                            $(".chkComrProp").propAttr({
                                disabled: false
                            });
                        }                                               
                        
                        if (cnt > 1) {
                            $('#ddlPropertyType').children('option:first').text(selected + "+" + (cnt - 1));                            
                        }
                        else {
                            $('#ContentPlaceHolder1_SearchPanel_HDPropertyType').val(selected);
                            $('#ddlPropertyType').children('option:first').text(selected);                            
                        }
                        $("#ddlPropertyType").css({ "border-color": "" });
                        $("#errorPropertyType").text("");
                    }
                    else {

                        $(".chkComrProp").propAttr({
                            disabled: false
                        });
                        $(".chkResProp").propAttr({
                            disabled: false
                        });
                        // alert('test');
                        $("#errorPropertyType").text("Enter Property Type");
                        $('#ddlPropertyType').children('option:first').text("Property Type");                        
                        $("#ddlPropertyType").css({ "border-color": "red" });                       
                        return false;
                    }
                    $("#ddlPropertyType").css("display", "block");                   
                });
});

$(document).ready(function () {  

    $("#divCommercial").hide();
    $('#chkResidencial').attr('checked', true);
    $('.chkResProp').attr('checked', true);
    $(".chkPropertytype").change();

    $("#btnCloseSub").click(function (e) {
        HideSubDialog();
        e.preventDefault();

    });

    $("#divaskOverlay").click(function (e) {
        HideSubDialog();
    });

    $(document).mouseup(function (e) {

        var container = $("#checkboxes");

        if ($("#ContentPlaceHolder1_SearchPanel_checkboxclose").text() == "1") {
            if (container.has(e.target).length === 0) {
                checkboxes.style.display = "none";
                $("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text("1");
                $("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text("0");
                expanded = false;
            }
        }
        else {
            $("#ContentPlaceHolder1_SearchPanel_checkboxclose").text("0");
            $("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text("0");
        }

    });
    $(document).mouseup(function (e) {
        var container = $("#ContentPlaceHolder1_SearchPanel_checkboxes1");

        if (container.has(e.target).length === 0) {
            $("#ContentPlaceHolder1_SearchPanel_checkboxes1").css({ "display": "none" });

            return false;
        }

    });

    $("#chkResidencial").change(function () {
      
        if ($("#chkResidencial").is(":checked")) {
            //alert('res');
            $("#divResidential").show();
            $("#commercial").css({ "top": "280px" });
            $('#chkCommercial').attr('checked', false);
            $("#divCommercial").hide();
            $("#checkboxes").css({ "height": "280px" });
            $('.chkResProp').attr('checked', true);
            $('.chkComrProp').attr('checked', false);
            $(".chkPropertytype").change();

            $('#chkNewProjects').attr('checked', false);
            $('#chkDealers').attr('checked', false);

            $('#ContentPlaceHolder1_SearchPanel_ddlType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlType').val('Buy');
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').val('Min Budget');
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').val('Max Budget');
        }
        else {

            //$("#divResidential").hide();
            $("#divCommercial").hide();            
            //$("#commercial").css({ "top": "80px" });            
            //$("#checkboxes").css({ "height": "120px" });
            $("#commercial").css({ "top": "290px" });
            $("#checkboxes").css({ "height": "280px" });

            $('.chkResProp').attr('checked', false);
            $(".chkPropertytype").change();
        }
    });

    $("#chkCommercial").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkCommercial").is(":checked")) {
            $("#divCommercial").show();
            $("#divResidential").hide();
            //$("#commercial").css({ "top": "28px" });
            $("#commercial").css({ "top": "80px" });
            $('#chkResidencial').attr('checked', false);
            $('.chkComrProp').attr('checked', true);
            $('.chkResProp').attr('checked', false);
            $("#checkboxes").css({ "height": "280px" });

            $('#chkNewProjects').attr('checked', false);
            $('#chkDealers').attr('checked', false);

            $('#ContentPlaceHolder1_SearchPanel_ddlType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlType').val('Buy');
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').val('Min Budget');
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').val('Max Budget');
        }
        else {
            $('.chkComrProp').attr('checked', false);
            //$("#divCommercial").hide();
            $("#divResidential").hide();
            
            //$("#checkboxes").css({ "height": "110px" });
            $("#checkboxes").css({ "height": "280px" });
        }
        $(".chkPropertytype").change();
        
    });

    $("#chkNewProjects").change(function () {
        if ($("#chkNewProjects").is(":checked")) {
            //alert('check projects');
                        
            $('#chkCommercial').attr('checked', false);
            $('.chkComrProp').attr('checked', false);
            $("#divCommercial").hide();

            $('#chkResidencial').attr('checked', false);
            $('.chkResProp').attr('checked', false);
            $("#divResidential").hide();
            //alert('new proj');
            $(".chkPropertytype").change();

            $("#commercial").css({ "top": "80px" });
            $("#checkboxes").css({ "height": "110px" });

            $('#chkDealers').attr('checked', false);

            $('#ContentPlaceHolder1_SearchPanel_ddlType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlType').val('Buy');
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').val('Min Budget');
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').val('Max Budget');
            //$('#HDPropertyType').val('NEW PROJECTS');
            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val("NEW PROJECTS");

            //alert('2');
            $("#ddlPropertyType").children('option:first').text("NEW PROJECTS");
            $("#ddlPropertyType").css({ "border-color": "" });
            $("#errorPropertyType").text("");                        
        }
        else {
            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val('');
            $('#ContentPlaceHolder1_SearchPanel_ddlType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
        }

    });

    $("#chkDealers").change(function () {
        if ($("#chkDealers").is(":checked")) {

            $('#chkCommercial').attr('checked', false);
            $('.chkComrProp').attr('checked', false);
            $("#divCommercial").hide();

            $('#chkResidencial').attr('checked', false);
            $('.chkResProp').attr('checked', false);
            $("#divResidential").hide();
            //alert('new proj');
            $(".chkPropertytype").change();

            $("#commercial").css({ "top": "80px" });
            $("#checkboxes").css({ "height": "110px" });

            $('#chkNewProjects').attr('checked', false);

            $('#ContentPlaceHolder1_SearchPanel_ddlType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlType').val('Buy');
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').val('Min Budget');
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').attr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').val('Max Budget');

            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val("PROPERTY DEALERS");
            $("#ddlPropertyType").children('option:first').text("PROPERTY DEALERS");
            $("#ddlPropertyType").css({ "border-color": "" });
            $("#errorPropertyType").text("");
        }
        else {
            $('#ContentPlaceHolder1_SearchPanel_HDPropertyGroup').val('');
            $('#ContentPlaceHolder1_SearchPanel_ddlType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlType').val('Buy');
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlBudgetType').val('Min Budget');
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType').val('Max Budget');
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
        }

    });    
    


    $("#ContentPlaceHolder1_SearchPanel_btnSearch").click(function () {
       
        
        //var i = 0;
        //if ($("#ContentPlaceHolder1_SearchPanel_txtLocation").val() == "" || $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val() == "") {

        //    $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ 'border-color': 'red' });
        //    $("#ErrorMessage").text("Invalid Location");
        //    $("#ErrorMessage").css({ "color": "red" });
        //    i = 1;
        //}

        //var proptype = $("#ContentPlaceHolder1_SearchPanelHDPropertyGroup").val();
      
        //if (proptype == "") {
        //    $("#ddlPropertyType").css({ "border-color": "red" });
        //    $("#errorPropertyType").text("Enter Property Type");
        //    i = 1;
        //}
        //alert(i);                    
        //if (i == 1) {
        //    return false;
        //}
        //else {
        //    return true;
        //}

    });

    $("#ContentPlaceHolder1_SearchPanel_advanced").click(function () {
        var i = 0;
        if ($("#ContentPlaceHolder1_SearchPanel_txtLocation").val() == "" || $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ 'border-color': 'red' });
            $("#ErrorMessage").text("Invalid Location");
            $("#ErrorMessage").css({ "color": "red" });
            i = 1;
        }

        var proptype = $("#ContentPlaceHolder1_SearchPanel_HDPropertyGroup").val();
        //alert(proptype);
        //alert(i);
        if (proptype == "") {
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
            i = 1;
        }
      //  alert(i);                    
        if (i == 1) {
            return false;
        }
        else {
            return true;
        }
    });

}); id = "signin"


function showCheckboxes() {

    if ($("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text() == "1") {
        $("#checkboxes").hide();
        $("#ContentPlaceHolder1_SearchPanel_checkboxclose").text("0");
        $("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text("0");
    }
    else if ($("#ContentPlaceHolder1_SearchPanel_checkboxclose").text() == "0") {
        $("#checkboxes").show();
        $("#ContentPlaceHolder1_SearchPanel_checkboxclose").text("1");

    }
    else {
        $("#checkboxes").hide();
        $("#ContentPlaceHolder1_SearchPanel_checkboxclose").text("0");
        $("#ContentPlaceHolder1_SearchPanel_checkboxclose1").text("0");
    }

}

function showCheckboxes1() {

    var checkboxes = document.getElementById("ContentPlaceHolder1_SearchPanel_checkboxclose1");

    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;

    }
}

function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}



$(function () {
   
    $("#ContentPlaceHolder1_SearchPanel_txtLocation").autocomplete({
       
        source: function (request, response) {
            var param = { Data: $("#ContentPlaceHolder1_SearchPanel_txtLocation").val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ "border-color": "" });
                        $("#ErrorMessage").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]
                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ "border-color": "red" });
                        $("#ErrorMessage").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val("");
            $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});

$(document).keyup(function (e) {

    if (e.keyCode == 27) {
        HideSubDialog();
    }   // escape key maps to keycode `27`
});

function ShowSubDialog(modal) {
    $("#overlay").show();
    $("#dialogSub").fadeIn(300);

    if (modal) {
        $("#overlay").bind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideSubDialog();
        });
    }
}

function HideSubDialog() {
    $("#overlay").hide();
    $("#dialogSub").fadeOut(300);
}


function DisableMaxBudBuy() {
    $("#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType").prop({
        disabled: true
    });
}

function EnableMaxBudBuy() {
    $("#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType").prop({
        disabled: false
    });
}

function DisableMaxBudRent() {
    $("#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType").prop({
        disabled: true
    });
}

function EnableMaxBudRent() {
    $("#ContentPlaceHolder1_SearchPanel_ddlMaxBudgetType").prop({
        disabled: false
    });
}
$(function () {
    $("#ContentPlaceHolder1_SearchPanel_txtLocation").autocomplete({
        source: function (request, response) {
            var param = { Data: $("#ContentPlaceHolder1_SearchPanel_txtLocation").val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ "border-color": "" });
                        $("#ErrorMessage").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]
                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_SearchPanel_txtLocation").css({ "border-color": "red" });
                        $("#ErrorMessage").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val("");
            $("#ContentPlaceHolder1_SearchPanel_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});
