class BillsController < ApplicationController
	def index
		@bills = Bill.all
		render json: @bills
	end
	
	
	def create
		@bill = Bill.create(bill_params)
		render 'bill'
	end



	private
		def bill_params
			params.require(:bill).permit(:name, :amount)
		end
end
