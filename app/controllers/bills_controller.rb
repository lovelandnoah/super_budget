class BillsController < ApplicationController
	def create
		@bill = bills.create(bill_params)
		render 'bill'
	end

	private

	def bill_params
		params.require(:bill).permit(:name, :amount)
	end
end
