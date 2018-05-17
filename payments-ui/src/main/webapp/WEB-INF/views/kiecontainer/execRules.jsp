<h2>Rule Executions</h2>
${request}
<div class="col-sm-12">
	<c:if test="${not empty errorMessage}">
		<div class="alert alert-error">${f:h(errorMessage)}</div>
	</c:if>

	<div class="well">
		<form:form action="${pageContext.request.contextPath}/kiecontainer/execRules"
			method="get" modelAttribute="kieContainerExecForm"
			class="form-inline my-inline">
			<form:input path="amount" class="form-control" />
			<input type="submit" value="execRules" class="btn btn-default" />
		</form:form>
	</div>

	<table class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>approval result</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="approval" items="${page.content}">
				<tr>
					<td>${f:h(approval.type)}</td>
			</c:forEach>
		</tbody>
	</table>

	<util:pagination page="${page}" query="type=${f:h(param.type)}" />
</div>
