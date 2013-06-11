class ProductsController < ApplicationController
	def index
		@products = product.order("name").limit(10)
		@products = @products.offset((params[:page].to_i-1)*10) if params[:page].present?
		respond_to do |format|
			format.html
			format.json { render json: @products }
		end
	end

	def show
		@product = Product.find(params[:id])
	end
	
	def new
		@product = Product.new
	end

	def create
		@product = Product.new(params[:product])
		if @product.save
			redirect_to @product, notice: "Successfully created product."
		else
			render :new
		end
	end	