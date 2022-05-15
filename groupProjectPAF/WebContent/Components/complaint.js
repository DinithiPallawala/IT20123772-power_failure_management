$(document).ready(function() 
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateComplaintForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidComplaintIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "ComplaintAPI", 
 type : type, 
 data : $("#formComplaint").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onComplaintSaveComplete(response.responseText, status); 
 } 
 }); 

function onComplaintSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divComplaintGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 
 $("#hidComplaintIDSave").val(""); 
 $("#formComplaint")[0].reset(); 
}
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
$("#hidComplaintIDSave").val($(this).closest("tr").find('#hidComplaintIDUpdate').val()); 
$("#cust_name").val($(this).closest("tr").find('td:eq(0)').text());
$("#nic").val($(this).closest("tr").find('td:eq(1)').text());
$("#area").val($(this).closest("tr").find('td:eq(2)').text());
$("#grid_name").val($(this).closest("tr").find('td:eq(3)').text());
$("#complaint").val($(this).closest("tr").find('td:eq(4)').text());
 $("#status").val($(this).closest("tr").find('td:eq(5)').text()); 

});

//delete
$(document).on("click", ".btnRemove", function(event) 
{ 
 $.ajax( 
 { 
 url : "ComplaintAPI", 
 type : "DELETE", 
 data : "comp_id=" + $(this).data("complaintid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onComplaintDeleteComplete(response.responseText, status); 
 } 
 }); 
});
function onComplaintDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divComplaintGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 

}
// CLIENT-MODEL================================================================
function validateComplaintForm() 
{ 

// NAME
if ($("#cust_name").val().trim() == "") 
 { 
 return "Insert customer name."; 
 } 

// NIC
if ($("#nic").val().trim() == "") 
 { 
 return "Insert NIC."; 
 } 

// area
if ($("#area").val().trim() == "") 
 { 
 return "Insert area."; 
 } 

// grid name
if ($("#grid_name").val().trim() == "") 
 { 
 return "Insert grid name."; 
 } 

// complaint
if ($("#complaint").val().trim() == "") 
 { 
 return "Insert complaint."; 
 } 

// status
if ($("#status").val().trim() == "") 
 { 
 return "Insert status."; 
 } 
 
return true; 
}});