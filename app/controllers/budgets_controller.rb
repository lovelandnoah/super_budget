class BudgetsController < ApplicationController
	def index
		@budgets = Budget.all
		render json: @budgets
	end

	def new
		render json: Budget.create(budget_params)
	end

	private

	def budget_params
		params.require(:budget).permit(:money)
	end
end
