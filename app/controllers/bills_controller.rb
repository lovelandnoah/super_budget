class BillsController < ApplicationController
	def create
		@bill = current_user.bills.create(bill_params)
		render 'bill'
	end

	private
		def bill_params
			params.require(:bill).permit(:name, :amount)
		end
end
