<h2>Rule Executions</h2>
${request}
<div class="col-sm-12">
	<c:if test="${not empty errorMessage}">
		<div class="alert alert-error">${f:h(errorMessage)}</div>
	</c:if>

	<div class="well">
		<a href="${pageContext.request.contextPath}/kiecontainer/execRules?form"
			class="btn btn-primary">Exec Rule</a><br> <br>
		<form:form action="${pageContext.request.contextPath}/kiecontainer/execRule"
			method="get" modelAttribute="kieContainerExecForm"
			class="form-inline my-inline">
			<form:input path="amount" class="form-control" />
			<input type="submit" value="execRules" class="btn btn-default" />
		</form:form>
	</div>

	<table class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>amount</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="approval" items="${page.content}">
				<tr>
					<td>${f:h(user.id)}</td>
					<td><form:form
							action="${pageContext.request.contextPath}/user"
							class="form-inline">
							<input type="hidden" name="id" value="${f:h(user.id)}" />
							<input type="submit" class="btn btn-default"
								name="redirectToUpdate" value="Update" />
							<input type="submit" class="btn btn-danger"
								name="redirectToDelete" value="Delete" />
						</form:form></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>

	<util:pagination page="${page}" query="type=${f:h(param.type)}" />
</div>
