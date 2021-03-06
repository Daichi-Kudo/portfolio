class StaticPagesController < ApplicationController
  def home
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.contact_mail(@contact).deliver
      flash[:success] = 'お問い合わせを受け付けました'
      redirect_to root_path
    else
      render 'static_pages/home'
    end
  end

  def profile
  end

  def works
  end

  def contact
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :Organisation, :message)
  end
end
