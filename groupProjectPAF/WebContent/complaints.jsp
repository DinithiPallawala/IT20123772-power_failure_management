<%@ page import="com.PowerFailureComplaintServices" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Power Failure Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/main2.js"></script>
<script src="Components/complaint.js"></script>
</head>
<body>
<div class="container">

<div class="row">
<div class="col-8">
 
 <h1 class="m-3">Power Failure Management</h1>
 
 <form id="formComplaint" name="formComplaint" >
 
 <!-- NAME -->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName">Customer Name: </span>
 </div>
 <input type="text" id="cust_name" name="cust_name">
 </div>

<!-- NIC -->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName">NIC No: </span>
 </div>
 <input type="text" id="nic" name="nic">
 </div>
 
 <!-- Area -->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName"> Area: </span>
 </div>
 <input type="text" id="area" name="area">
 </div>

<!-- Grid name -->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName"> Grid Name: </span>
 </div>
 <input type="text" id="grid_name" name="grid_name">
 </div>
 
 <!-- Complaint-->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName"> Complaint: </span>
 </div>
 <input type="text" id="complaint" name="complaint">
 </div>
 
 <!-- status-->
 <div class="input-group input-group-sm mb-3">
 <div class="input-group-prepend">
 <span class="input-group-text" id="lblName">  Status: </span>
 </div>
 <input type="text" id="status" name="status">
 </div>
 
<input type="button" id="btnSave" value="Save" class="btn btn-primary">
<input type="hidden" id="hidComplaintIDSave" name="hidComplaintIDSave" value="">

</form>
<div id="alertSuccess" class="alert alert-success"></div>
 <div id="alertError" class="alert alert-danger"></div>
</div>
</div>
<br>
 

<div id="divComplaintGrid">
 
 <% PowerFailureComplaintServices complaintObj = new PowerFailureComplaintServices();
 out.print(complaintObj.viewComplaints());
 %>
</div>
</div>
<br> 


</body>
</html>