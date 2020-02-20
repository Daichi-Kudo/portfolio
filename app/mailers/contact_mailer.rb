class ContactMailer < ApplicationMailer

  def contact_mail
    @greeting = "Hi"

    mail to: ENV['MAIL'], subject: "ポートフォリオから"
  end
end
