<h2>Payees</h2>
${request}
<div class="col-sm-12">
	<c:if test="${not empty errorMessage}">
		<div class="alert alert-error">${f:h(errorMessage)}</div>
	</c:if>

	<div class="well">
	  <h3>Add New Payee</h3>
		<table class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>id</th>
				<th>name</th>
				<th>bank name</th>
				<th>account no.</th>
			</tr>
		</thead>
		<tbody>
		
			<form:form action="${pageContext.request.contextPath}/payees/create" 
				method="post" modelAttribute="payeeForm" class="form-inline my-inline">
			    <td><form:input path="id" class="form-control" /></td>
			    <td><form:input path="name" class="form-control" /></td>
			    <td><form:input path="bankName" class="form-control" /></td>
			    <td><form:input path="accountNumber" class="form-control" /></td>

			    <td><input type="submit" value="addPayee" class="btn btn-default" /></td>
		    </form:form>
	
		</tbody>
	</table>
	
	
	

	</div>

	<table class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>id</th>
				<th>name</th>
				<th>bank name</th>
				<th>account no.</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="payee" items="${page.content}">
				<tr>
					<td>${f:h(payee.id)}</td>
					<td>${f:h(payee.name)}</td>
					<td>${f:h(payee.bankName)}</td>
					<td>${f:h(payee.accountNumber)}</td>


					<td><form:form
							action="${pageContext.request.contextPath}/user"
							class="form-inline">
							<input type="hidden" name="id" value="${f:h(payee.id)}" />
							<input type="submit" class="btn btn-default"
								name="redirectToUpdate" value="Update" />
							<input type="submit" class="btn btn-danger"
								name="redirectToDelete" value="Delete" />
						</form:form></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>

	<util:pagination page="${page}" query="type=${f:h(param.id)}" />
</div>
