---
slug: "/blog/namespace-anything"
path: "/blog/namespace-anything"
date: "2020-12-02"
title: "Namespace::Anything"
description: "Namespace::Anything"
readtime: "5 min read"
thumbnail: "./preview-card.png"
tags: "Ruby, Rails"
---

Ditch module syntax and use namespacing instead. Here we will use an existing mailer as an example, but you can namespace anything in our project: controller, models, helpers, you name it!

1. Place the mailer in the subdirectory ex `mailers/users/`

2. Add the namespace to the mailer class itself

   ```ruby
   class Users::AvailabilityMailingListNewSubscriptionMailer < ApplicationMailer
   ```

3. Wherever the mailer is called in the application, preface it with the namespace

   ```ruby
   def perform(zipcode, email)
     @zipcode = zipcode
     @email = email
     Users::AvailabilityMailingListNewSubscriptionMailer.send_subscribed_notice(
       @zipcode,
       @email
     )
       .deliver_later
   end
   ```

4. namespace the appropriate spec folder to match the subfolder in the application `spec/mailers/users/`

5. namespace the spec file

   ```ruby
   require "rails_helper"

   RSpec.describe Users::AvailabilityMailingListNewSubscriptionMailer, type: :mailer do
   ```

6. namespace the mailer preview as well `spec/mailers/previews/users/`

7. namespace the mailer preview file

   ```ruby
   class Users::AvailabilityMailingListNewSubscriptionPreview < ActionMailer::Preview
   ```
