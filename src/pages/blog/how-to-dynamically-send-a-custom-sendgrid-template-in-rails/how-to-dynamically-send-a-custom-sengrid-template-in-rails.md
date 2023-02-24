---
slug: "/blog/how-to-dynamically-send-a-custom-sengrid-template-in-rails"
path: "/blog/how-to-dynamically-send-a-custom-sengrid-template-in-rails"
date: "2021-05-11"
title: "Using Custom Sendgrid Templates In Rails"
description: "How to: Dynamically Send a Custom Sendgrid Template In Rails"
readtime: "40 min read"
thumbnail: "./preview-card.png"
tags: "Rails, Sendgrid"
---

Using sendgrid templates, you can customize a template once via sendgrid's GUI email creator tool, and send the email via the sendgrid api with our own custom content. This makes it easier than going through the steps of creating a mailer and coding a template manually, pushing an update to the server and sending via command line (pain in the ass)

### Create the template on Sendgrid and generate a template id

1. Visit https://mc.sendgrid.com/dynamic-templates
2. Hit `Create A Dynmaic Template` button
3. Click and expand the new list item created and copy the `Template ID`, example: `d-7d913b9fb74d454db6fc6bb507254741`

### Add a version and customize the template

1. Customize the template via the sendgrid email template creator web tool and where dynamic data is needed, add handlebar syntax `{{first_name}}`

### Send the email

1. Define the method to send the email

```ruby
require 'sendgrid-ruby'
include SendGrid

class Users::SendgridTemplateMailerWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(user_id, template_id)
    @user = User.find(user_id)

    mail = SendGrid::Mail.new
    mail.from = Email.new(email: 'announcements@sample.com')

    personalization = Personalization.new
    personalization.add_to(Email.new(email: @user.email))
    personalization.add_dynamic_template_data(
      { subject: 'Testing Templates Subject', first_name: @user.first_name }
    )

    mail.add_personalization(personalization)
    mail.template_id = template_id

    sg = SendGrid::API.new(api_key: SENDGRID_API_KEY)

    begin
      response = sg.client.mail._('send').post(request_body: mail.to_json)
    rescue Exception => e
      puts e.message
    end
  end
end
```

2. Send the email using the `template_id` created on sendgrid webapp

```ruby
Users.SendgridTemplateMailerWorker(@user.id, template_id)
```
